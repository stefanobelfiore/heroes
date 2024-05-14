import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateHeroComponent } from '../pages/create-hero.component';
import { CreateHeroRoutingModule } from './create-hero-routing.module';


@NgModule({
  declarations: [CreateHeroComponent],
  imports: [
    CommonModule,
    CreateHeroRoutingModule
  ]
})
export class CreateHeroModule { }
