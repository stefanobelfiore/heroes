import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from '../pages/create-hero.component';

const routes: Routes = [
  {
    path: '',
    component: CreateHeroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateHeroRoutingModule { }
