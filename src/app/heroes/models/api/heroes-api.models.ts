export interface HeroItem {
  id: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
}

export type Publisher = 'DC Comics' | 'Marvel Comics';
