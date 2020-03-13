import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  title = 'firstapp';
  arrQualification = ["B.E","B.Tech","M.E","M.Tech"];
  arrExperience = ["1","2","3","4","5"];
  arrlang = ["C/C++","Java","C#","Php","Python"];
  arrlangdefault=[];

  
  employeeModel = new Employee();
   arrEmployee: Employee[];
 
   constructor(router:Router) {}
 
  ngOnInit(){
    this.employeeModel.Qualification="B.Tech";
    this.employeeModel.Experience=3;
    this.employeeModel.CodingLanguages=[ 
    "C/C++","Java"
  ];

  }

  // arrEmployee = [];
  onSubmit(){
    this.arrEmployee.push(this.employeeModel);
    console.log(this.employeeModel);
  }

}
