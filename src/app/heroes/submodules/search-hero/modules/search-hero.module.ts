import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchHeroRoutingModule } from './search-hero-routing.module';
import { SearchHeroComponent } from '../pages/search-hero.component';


@NgModule({
  declarations: [SearchHeroComponent],
  imports: [
    CommonModule,
    SearchHeroRoutingModule
  ]
})
export class SearchHeroModule { }
