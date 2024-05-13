import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoggingInterceptor } from './interceptors/logging-interceptor';
import { CommonComponent } from './core-components/common-component/common.component';
import { CoreComponentsModule } from './core-components/core-components.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CoreComponentsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  exports: [

  ],
  declarations: [

  ]
})
export class CoreModule { }