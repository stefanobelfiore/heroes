import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonComponent } from '@app/core/core-components/common-component/common.component';
import { HeroItem, Publisher } from '@app/heroes/models/api/heroes-api.models';
import { Store } from '@ngxs/store';
import { SaveHero } from '@app/heroes/ngxs/heroes.actions';
import { HeroForm } from '@app/heroes/components/hero-form/models/hero-form-models';

@Component({
  selector: 'app-create-heroe',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent extends CommonComponent {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>('DC Comics'),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  constructor(
    public store: Store
  ) {
    super();
  }

  handleSubmitForm(form: FormGroup<HeroForm>) {
    if (this.heroForm.invalid) return;
    this.store.dispatch(new SaveHero(form.value as HeroItem));
  }

}
