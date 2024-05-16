import { Injectable, NgZone } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { catchError, tap } from 'rxjs';
import { HeroItem } from '../models/api/heroes-api.models';
import { DeleteHero, GetHeroById, GetHeroes, SaveHero } from './heroes.actions';
import { HeroesApiService } from '../services/api/heroes-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



interface HeroesStateModel {
  heroes: HeroItem[],
  heroById: HeroItem | null | undefined,//Caso undefined, estado inicializado, caso null, no se encontro el heroe
}

@State<HeroesStateModel>({
  name: 'HeroesState',
  defaults: {
    heroes: [],
    heroById: undefined
  },
})
@Injectable()
export class HeroesPageState {
  constructor(
    private store: Store,
    public heroesApiService: HeroesApiService,
    private snackbar: MatSnackBar,
    public router: Router,
    private zone: NgZone,
  ) { }

  @Action(GetHeroes, { cancelUncompleted: true })
  getHeroes(
    ctx: StateContext<HeroesStateModel>,
  ) {

    return this.heroesApiService
      .getHeroes()
      .pipe(
        tap((result) => {
          ctx.patchState({ heroes: result });
        }),
        catchError(() => {
          ctx.patchState({
            heroes: []
          });

          return 'error';
        })
      );
  }






  @Action(SaveHero, { cancelUncompleted: true })
  saveHero(
    ctx: StateContext<HeroesStateModel>,
    action: SaveHero
  ) {
    const newIdToAddHero = crypto.randomUUID();

    const saveObservable = action.payload.id ?
      this.heroesApiService.updateHero(action.payload) :
      this.heroesApiService.addHero({ ...action.payload, id: newIdToAddHero });

    return saveObservable.pipe(
      tap(() => {
        this.zone.run(() => {
          const message = action.payload.id ? 'actualizado!' : 'creado!';
          this.showSnackbar(`${action.payload.superhero} ${message}`);
          this.router.navigateByUrl('heroes');
        })
      }),
      catchError(() => {
        const errorType = action.payload.id ? 'error' : 'error';
        this.showSnackbar(`${action.payload.superhero} ${errorType}`, errorType);
        return errorType;
      })
    );
  }



  @Action(DeleteHero, { cancelUncompleted: true })
  DeleteHero(
    ctx: StateContext<HeroesStateModel>,
    action: DeleteHero
  ) {

    return this.heroesApiService.deleteHeroById(action.payload.id)
      .pipe(
        tap(() => {
          this.zone.run(() => {
            this.showSnackbar(`${action.payload.superhero} borrado!`);
            this.router.navigateByUrl('heroes');;
          })

        }),
        catchError(() => {

          this.showSnackbar(`${action.payload.superhero} no se ha podido borrar!`, 'error');
          return 'error';
        })
      );
  }


  @Action(GetHeroById, { cancelUncompleted: true })
  getHeroById(
    ctx: StateContext<HeroesStateModel>,
    action: GetHeroById
  ) {
    return this.heroesApiService.getHeroById(action.payload.id)
      .pipe(
        tap((result) => {
          ctx.patchState({ heroById: result })
        }),
        catchError(() => {
          ctx.patchState({ heroById: null })
          return 'error';
        })
      );
  }


  @Selector()
  static getHeroById(state: HeroesStateModel): HeroItem | null | undefined {
    return state.heroById;
  }

  @Selector()
  static getHeroes(state: HeroesStateModel): HeroItem[] {
    return state.heroes;
  }


  showSnackbar(message: string, type: 'done' | 'error' = 'done'): void {
    this.snackbar.open(message, type, {
      duration: 2500,
    })
  }


}