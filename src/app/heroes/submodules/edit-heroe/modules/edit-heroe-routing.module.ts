import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHeroeComponent } from '../pages/edit-heroe.component';

const routes: Routes = [
  {
    path: '',
    component: EditHeroeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditHeroeRoutingModule { }
