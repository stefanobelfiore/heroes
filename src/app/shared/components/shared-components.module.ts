import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCustomizedComponentsModule } from './material-customized-components/material-customized-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialCustomizedComponentsModule
  ],
  exports: [
    MaterialCustomizedComponentsModule
  ]
})
export class SharedComponentsModule { }
