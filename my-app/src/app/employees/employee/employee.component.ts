import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  title = 'Employee List';
  employees = [
    {name: 'John Doe', age: 30},
    {name: 'Jane Smith', age: 25},
    {name: 'Alice Johnson', age: 28}
  ];

  angularlogo = 'https://angular.io/assets/images/logos/angular/angular.png';

  onClick(e: any) {
    console.log('Button clicked! ', e.target.id);
  }

  onInput(e: any) {
    console.log('Diketik : ',  e.data);
    console.log('Isian : ',  e.target.value);
}
}
