import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHeroesRoutingModule } from './view-heroes-routing.module';
import { ViewHeroesComponent } from '../pages/view-heroes.component';


@NgModule({
  declarations: [ViewHeroesComponent],
  imports: [
    CommonModule,
    ViewHeroesRoutingModule
  ]
})
export class ViewHeroesModule { }
