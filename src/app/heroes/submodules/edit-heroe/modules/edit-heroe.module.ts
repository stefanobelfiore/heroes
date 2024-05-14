import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHeroeRoutingModule } from './edit-heroe-routing.module';
import { EditHeroeComponent } from '../pages/edit-heroe.component';


@NgModule({
  declarations: [EditHeroeComponent],
  imports: [
    CommonModule,
    EditHeroeRoutingModule
  ]
})
export class EditHeroeModule { }
