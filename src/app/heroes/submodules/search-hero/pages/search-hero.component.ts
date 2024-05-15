import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroItem } from '@app/heroes/models/api/heroes-api.models';
import { HeroesApiService } from '@app/heroes/services/api/heroes-api.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})
export class SearchHeroComponent {

  public searchInput = new FormControl('');
  public heroes: HeroItem[] = [];
  public selectedHero?: HeroItem;

  constructor(private heroesApiService: HeroesApiService) { }

  searchHero() {
    const value: string = this.searchInput.value || '';

    this.heroesApiService.getSuggestions(value)
      .subscribe(heroes => this.heroes = heroes);
  }


  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: HeroItem = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;

  }

}
