import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { RouterModule } from '@angular/router';
import { HeroesPageComponent } from '../pages/heroes-page.component';
import { HeroesComponentsModule } from '../components/heroes-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core/core.module';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';


@NgModule({
  declarations: [HeroesPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    SharedComponentsModule,
    HeroesRoutingModule,
    HeroesComponentsModule
  ]
})
export class HeroesModule { }
