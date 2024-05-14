import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroeComponent } from '../pages/create-heroe.component';

const routes: Routes = [
  {
    path: '',
    component: CreateHeroeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateHeroesRoutingModule { }
