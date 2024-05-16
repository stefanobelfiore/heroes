import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { CommonComponent } from '@app/core/core-components/common-component/common.component';
import { HeroCardItem } from '@app/heroes/components/hero-card/models/hero-card.models';
import { HeroItem } from '@app/heroes/models/api/heroes-api.models';
import { HeroesApiService } from '@app/heroes/services/api/heroes-api.service';
import { HeroesService } from '@app/heroes/services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})
export class SearchHeroComponent extends CommonComponent {

  searchInput = new FormControl('');
  heroes: HeroItem[] = [];
  heroesCards: HeroCardItem[] = [];
  selectedHero?: HeroItem;
  timeout: ReturnType<typeof setTimeout> | undefined;//Timeout para el typing del CUPS, para que no haga la llamada cada teclado, así espera a que hayan pasado 300ms.

  constructor(private heroesApiService: HeroesApiService, public router: Router, public heroesService: HeroesService) {
    super();
  }

  searchHero() {
    const value: string = this.searchInput.value || '';

    if (this.timeout) {//Si se vuelve a dar a la tecla se limpia el timeut qanterior
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {//Empieza el timeout para la llamada de las sugerencias
      this.observableList.push(
        this.heroesApiService.getSuggestions(value)
          .subscribe((heroes) => {
            this.heroes = heroes;
            this.heroesCards = this.heroesService.transformApiResponseToCartItems(heroes);
          })
      )
    }, 300);
    if (this.timeout) this.setTimeouts.push(this.timeout);//Si no se ha limpiado se pushea al array del clear timeout clase heredada
  }


  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: HeroItem = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
    this.heroesCards = this.heroesService.transformApiResponseToCartItems([hero]);
  }

}
