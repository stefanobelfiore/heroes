import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { catchError, tap } from 'rxjs';
import { HeroApiItem } from '../models/api/heroes-api.models';
import { GetHeroes } from './heroes.actions';
import { HeroesApiService } from '../services/api/heroes-api.service';



interface HeroesStateModel {
  heroes: HeroApiItem[],
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
  static getHeroes(state: HeroesStateModel): HeroApiItem[] {
    return state.heroes;
  }



}