import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { EmployeeModule } from './employee/employee.module';
import { NavRestrictDirective } from './diectives/nav-restrict.directive';
import { SimpleSliderDirective } from './diectives/simple-slider.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';

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
    EmployeeModule
  ],
  providers: [DefaultImagePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
