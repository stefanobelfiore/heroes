import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeroCardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeroCardComponent
  ]
})
export class HeroesComponentsModule { }
