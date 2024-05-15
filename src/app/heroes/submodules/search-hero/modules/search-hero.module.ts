import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchHeroRoutingModule } from './search-hero-routing.module';
import { SearchHeroComponent } from '../pages/search-hero.component';
import { CoreModule } from '@app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchHeroComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    SearchHeroRoutingModule
  ]
})
export class SearchHeroModule { }
