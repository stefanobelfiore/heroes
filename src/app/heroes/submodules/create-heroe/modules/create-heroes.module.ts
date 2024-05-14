import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateHeroesRoutingModule } from './create-heroes-routing.module';
import { CreateHeroeComponent } from '../pages/create-heroe.component';


@NgModule({
  declarations: [CreateHeroeComponent],
  imports: [
    CommonModule,
    CreateHeroesRoutingModule
  ]
})
export class CreateHeroesModule { }
