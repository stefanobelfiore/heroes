import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeroesPageComponent } from '../pages/heroes-page.component';
import { HeroesComponentsModule } from '../components/heroes-components.module';


@NgModule({
  declarations: [HeroesPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeroesRoutingModule,
    HeroesComponentsModule
  ]
})
export class HeroesModule { }
