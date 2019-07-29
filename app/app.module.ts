import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { EmployeeModule } from './employee/employee.module';
import { NavRestrictDirective } from './diectives/nav-restrict.directive';
import { SimpleSliderDirective } from './diectives/simple-slider.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpHelperService } from './services/http-helper.service';
import { AppErrorHandler } from './services/error-handler.service';
import { AppHttpInterceptorService } from './interceptors/app-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavRestrictDirective,
    SimpleSliderDirective,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    EmployeeModule
  ],
  providers: [
    DefaultImagePipe,
    HttpHelperService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
