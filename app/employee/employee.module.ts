import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [EmployeeComponent, EmpListComponent],
  exports: [EmployeeComponent],
  providers: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
