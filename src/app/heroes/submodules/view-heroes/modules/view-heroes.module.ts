import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHeroesRoutingModule } from './view-heroes-routing.module';
import { ViewHeroesComponent } from '../pages/view-heroes.component';
import { CoreModule } from '@app/core/core.module';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';


@NgModule({
  declarations: [ViewHeroesComponent],
  imports: [
    CommonModule,
    CoreModule,
    ViewHeroesRoutingModule,
    HeroesComponentsModule,
  ]
})
export class ViewHeroesModule { }
