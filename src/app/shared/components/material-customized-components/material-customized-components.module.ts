import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSpinnerCustomComponent } from './mat-spinner-custom/mat-spinner-custom.component';
import { CoreModule } from '@app/core/core.module';
import { MatButtonCustomComponent } from './mat-button-custom/mat-button-custom.component';
import { MatSidebarCustomComponent } from './mat-sidebar-custom/mat-sidebar-custom.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MatSpinnerCustomComponent,
    MatButtonCustomComponent,
    MatSidebarCustomComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
  ],
  exports: [
    MatSpinnerCustomComponent,
    MatButtonCustomComponent,
    MatSidebarCustomComponent,
  ]
})
export class MaterialCustomizedComponentsModule { }
