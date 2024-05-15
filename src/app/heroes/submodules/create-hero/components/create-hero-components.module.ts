import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatConfirmDialogCustomComponent } from './mat-confirm-dialog-custom/mat-confirm-dialog-custom.component';
import { CoreModule } from '@app/core/core.module';



@NgModule({
  declarations: [MatConfirmDialogCustomComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [MatConfirmDialogCustomComponent]
})
export class CreateHeroeComponentsModule { }
