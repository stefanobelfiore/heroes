import { Publisher } from "@app/heroes/models/api/heroes-api.models";

export interface HeroCardItem {
  id: string;
  superhero: string;
  publisher: Publisher;
  alterEgo: string;
  firstAppearance: string;
}

