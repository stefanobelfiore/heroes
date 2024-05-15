import { Injectable } from '@angular/core';
import { HeroItem } from '../models/api/heroes-api.models';
import { HeroCardItem } from '../components/hero-card/models/hero-card.models';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  transformApiResponseToCartItems(heroes: HeroItem[]): HeroCardItem[] {
    return heroes.map((hero) => ({
      id: hero.id,
      superhero: hero.superhero,
      publisher: hero.publisher,
      alterEgo: hero.alter_ego,
      firstAppearance: hero.first_appearance,
      characters: hero.characters,
    }));
  }
}
