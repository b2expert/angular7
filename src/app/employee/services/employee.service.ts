import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  public empList: Array<any> = [];

  /**
   * **GET 10 EMPLOYEE LIST**
   * @param deptName 
   */
  public fetchEmployeeByDept(deptName: string) {
    const empList: Array<any> = [];
    for (let i = 0; i < 10; i++) {
      empList.push({
        Name: `${deptName} Employee ${i + 1}`
      });
    }
    this.empList = empList;
  }
}
