import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { EmployeeComponent } from './employee/employee.component';



@NgModule({
  declarations: [
    FormEmployeeComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmployeeComponent // <- supaya bisa digunakan di luar modul ini, seperti AppComponent
  ]
})
export class EmployeesModule { }
