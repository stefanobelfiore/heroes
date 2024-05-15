import { HeroItem } from "../models/api/heroes-api.models";

//GET LISTADO HEROES
export class GetHeroes {
  static readonly type = '[View Heroes state] get heroes';
  constructor() { }
}


//Save hero
export class SaveHero {
  static readonly type = '[View Heroes state] save heroes';
  constructor(public payload: HeroItem) { }
}


//Delete hero
export class DeleteHero {
  static readonly type = '[View Heroes state] delete hero';
  constructor(public payload: { id: string, superhero: string }) { }
}


//Get hero by id
export class GetHeroById {
  static readonly type = '[View Heroes state] get hero by id';
  constructor(public payload: { id: string }) { }
}
