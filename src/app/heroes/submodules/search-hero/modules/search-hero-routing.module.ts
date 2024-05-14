import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHeroComponent } from '../pages/search-hero.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHeroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchHeroRoutingModule { }
