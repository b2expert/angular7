import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss'],
  providers: [EmployeeService]
})
export class EmpListComponent implements OnInit {

  constructor(
    public empService: EmployeeService
  ) { }
 
  @Input() deptName: string = '';
  
  ngOnInit() {
    this.empService.fetchEmployeeByDept(this.deptName)
  }

}
