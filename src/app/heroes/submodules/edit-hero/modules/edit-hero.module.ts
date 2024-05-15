import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHeroRoutingModule } from './edit-hero-routing.module';
import { EditHeroComponent } from '../pages/edit-hero.component';
import { HeroesComponentsModule } from '@app/heroes/components/heroes-components.module';
import { CoreModule } from '@app/core/core.module';


@NgModule({
  declarations: [EditHeroComponent],
  imports: [
    CommonModule,
    EditHeroRoutingModule,
    CoreModule,
    HeroesComponentsModule
  ]
})
export class EditHeroModule { }
