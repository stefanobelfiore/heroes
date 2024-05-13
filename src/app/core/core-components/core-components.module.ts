import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common-component/common.component';



@NgModule({
  declarations: [CommonComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonComponent]
})
export class CoreComponentsModule { }
