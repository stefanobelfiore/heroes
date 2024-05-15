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

