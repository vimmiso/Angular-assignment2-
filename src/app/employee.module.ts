import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './employee.component';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NewEmployeeComponent } from './employee-list/new-employee/new-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path:'employees', component:EmployeeListComponent},
  {path:'newemployee', component:NewEmployeeComponent},
  {path:'',redirectTo:'/newemployee',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    EmployeeListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
