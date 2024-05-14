import { Injectable } from '@angular/core';
import { HeroApiItem } from '../models/api/heroes-api.models';
import { HeroCardItem } from '../components/hero-card/models/hero-card.models';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  transformApiResponseToCartItems(heroes: HeroApiItem[]): HeroCardItem[] {
    return heroes.map((hero) => ({
      id: hero.id,
      superhero: hero.superhero,
      publisher: hero.publisher,
      alterEgo: hero.alter_ego,
      firstAppearance: hero.first_appearance,
      characters: hero.characters,
      altImg: hero.alt_img,
    }));
  }
}
