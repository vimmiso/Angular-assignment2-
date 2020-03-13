import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './employee-list/new-employee/new-employee.component';



const routes: Routes = [
  {path:'employees', component:EmployeeListComponent},
  {path:'newemployee', component:NewEmployeeComponent},
  {path:'',redirectTo:'/newemployee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent,NewEmployeeComponent]
