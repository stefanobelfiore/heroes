import { FormControl } from "@angular/forms";
import { Publisher } from "@app/heroes/models/api/heroes-api.models";

export interface HeroForm {
  id: FormControl<string>;
  superhero: FormControl<string>;
  publisher: FormControl<Publisher | null>;
  alter_ego: FormControl<string | null>;
  first_appearance: FormControl<string | null>;
}