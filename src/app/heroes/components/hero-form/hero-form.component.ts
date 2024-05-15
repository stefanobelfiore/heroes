import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { HeroItem, Publisher } from '@app/heroes/models/api/heroes-api.models';
import { HeroForm } from './models/hero-form-models';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  @Input() title: string = '';
  @Output() emitSubmitForm: EventEmitter<FormGroup<HeroForm>> = new EventEmitter();
  @Output() emitDeleteHero = new EventEmitter();

  @Input() heroForm: FormGroup<HeroForm> = new FormGroup({
    id: new FormControl<string>('', { nonNullable: true }),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>('DC Comics'),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  onSubmit(): void {

    this.emitSubmitForm.emit(this.heroForm)
    // if (this.heroForm.value.id) {
    //   this.heroesApiService.updateHero(this.heroForm.value as HeroItem)
    //     .subscribe(hero => {
    //       this.showSnackbar(`${hero.superhero} updated!`);
    //     });

    //   return;
    // }

    // this.heroForm.patchValue({ id: crypto.randomUUID() });
    // this.heroesApiService.addHero(this.heroForm.value as HeroItem)
    //   .subscribe(hero => {
    //     this.router.navigate(['heroes/edit-hero', hero.id]);
    //     this.showSnackbar(`${hero.superhero} created!`);
    //   });
  }

  onDeleteHero() {
    if (!this.heroForm.value.id) throw Error('Hero id is required');
    this.emitDeleteHero.emit();
  }
}
