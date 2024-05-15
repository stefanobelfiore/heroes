import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { RouterModule } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroCardComponent,
    HeroFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeroCardComponent,
    HeroFormComponent,
  ]
})
export class HeroesComponentsModule { }
