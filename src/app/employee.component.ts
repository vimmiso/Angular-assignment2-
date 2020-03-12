import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class AppComponent implements OnInit{
  
  title = 'firstapp';
  arrQualification = ["B.E","B.Tech","M.E","M.Tech"];
  arrExperience = ["1","2","3","4","5"];
  arrlang = ["C/C++","Java","C#","Php","Python"];
  arrlangdefault=[];

  
  employeeModel = new Employee();
 
  constructor(){

  }
 
  ngOnInit(){
    this.employeeModel.Qualification="B.Tech";
    this.employeeModel.Experience=3;
    this.employeeModel.CodingLanguages=[ 
    "C/C++","Java"
  ];

  }

  
  onSubmit(){
    console.log(this.employeeModel);
  }
}
