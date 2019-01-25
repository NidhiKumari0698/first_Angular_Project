import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `<div *ngFor="let employee of employees "><p>{{employee.name}}</p></div>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }
  

}
