import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { AppComponent } from 'src/app/employee.component';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
  // template: `
  //   <p>
  //     employee-list works!
  //     <button type="submit" id="submit" onsubmit="onSubmit()" style="margin-top: 20px;" routerLink="/employees" routerLinkActive="active">
  //     <b>Submit</b>
  // </button>
  //   </p>
  // `,
  // styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor(router:Router) {}

  // @input listemployee:Employee[] = AppComponent.ar;
  // console.log(AppComponent.);
   employeeModel = new Employee();
   arrEmployee: Employee[];
 
  onSubmit(){
    // this.arrEmployee.push(this.employeeModel);
    console.log(this.employeeModel);
  }
  ngOnInit(): void {
  }

}
