import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from '../utility/utility.module';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule
  ],
  exports: [
    EmployeeListComponent,
  ],
})
export class EmployeeModule { }
