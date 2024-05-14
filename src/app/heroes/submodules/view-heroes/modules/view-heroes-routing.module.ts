import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHeroesComponent } from '../pages/view-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: ViewHeroesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewHeroesRoutingModule { }
