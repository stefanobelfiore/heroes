import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateHeroComponent } from '../pages/create-hero.component';
import { CreateHeroRoutingModule } from './create-hero-routing.module';
import { CoreModule } from '@app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateHeroeComponentsModule } from '../components/create-hero-components.module';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';


@NgModule({
  declarations: [CreateHeroComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    CreateHeroRoutingModule,
    CreateHeroeComponentsModule,
    HeroesComponentsModule
  ]
})
export class CreateHeroModule { }
