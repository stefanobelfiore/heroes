import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { LoggingInterceptor } from './interceptors/logging-interceptor';
import { CoreComponentsModule } from './core-components/core-components.module';
import { MaterialModule } from './libraries-modules/material/material.module';


@NgModule({
  imports: [
    CoreComponentsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  exports: [
    CoreComponentsModule,
    MaterialModule
  ],
  declarations: [

  ]
})
export class CoreModule { }