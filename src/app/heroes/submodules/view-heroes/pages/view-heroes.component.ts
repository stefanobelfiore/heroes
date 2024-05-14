import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '@app/core/core-components/common-component/common.component';
import { HeroCardItem } from '@app/heroes/components/hero-card/models/hero-card.models';
import { HeroApiItem } from '@app/heroes/models/api/heroes-api.models';
import { GetHeroes } from '@app/heroes/ngxs/heroes.actions';
import { HeroesPageState } from '@app/heroes/ngxs/heroes.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-view-heroes',
  templateUrl: './view-heroes.component.html',
  styleUrls: ['./view-heroes.component.scss']
})
export class ViewHeroesComponent extends CommonComponent implements OnInit {

  @Select(HeroesPageState.getHeroes) heroes$!: Observable<HeroApiItem[]>;

  heroes: HeroCardItem[] = [];

  ngOnInit(): void {
    this.store.dispatch(new GetHeroes());
  }
  constructor(public store: Store, public heroesService: HeroesService) {
    super();

    this.observableList.push(
      this.heroes$.subscribe((heroes) => {
        this.heroes = this.heroesService.transformApiResponseToCartItems(heroes);
      })
    )
  }

}
