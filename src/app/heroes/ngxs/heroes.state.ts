import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { catchError, tap } from 'rxjs';
import { HeroItem } from '../models/api/heroes-api.models';
import { GetHeroes, SaveHero } from './heroes.actions';
import { HeroesApiService } from '../services/api/heroes-api.service';



interface HeroesStateModel {
  heroes: HeroItem[],
}

@State<HeroesStateModel>({
  name: 'HeroesState',
  defaults: {
    heroes: [],
  },
})
@Injectable()
export class HeroesPageState {
  constructor(
    private store: Store,
    public heroesApiService: HeroesApiService
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


  @Selector()
  static getHeroes(state: HeroesStateModel): HeroItem[] {
    return state.heroes;
  }




  @Action(SaveHero, { cancelUncompleted: true })
  saveHero(
    ctx: StateContext<HeroesStateModel>,
    action: SaveHero
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



}