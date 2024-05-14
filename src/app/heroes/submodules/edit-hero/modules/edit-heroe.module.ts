import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHeroRoutingModule } from './edit-hero-routing.module';
import { EditHeroComponent } from '../pages/edit-hero.component';


@NgModule({
  declarations: [EditHeroComponent],
  imports: [
    CommonModule,
    EditHeroRoutingModule
  ]
})
export class EditHeroModule { }
