import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees()
  {
    return[{id:"1",name:"Viswas",age:"21"},
    {id:"2",name:"Kartik",age:"22"},
    {id:"3",name:"Ananya",age:"23"},
    {id:"4",name:"Akash",age:"24"},
     ];
  }
}
