import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeeListComponent,
  ],
})
export class EmployeeModule { }
