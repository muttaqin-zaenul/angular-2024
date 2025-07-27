import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  voteList : number[];

    employees = [
    { name: 'Ali', age: 28, vote: 0, avatar : 'https://randomuser.me/api/portraits'},
    { name: 'Bob', age: 34, vote: 0, avatar: 'https://randomuser.me/api/portraits'},
    { name: 'Cha', age: 25, vote: 0, avatar: 'https://randomuser.me/api/portraits'}
  ];

  searchText = "";
  searchText2 = new FormControl('');

  constructor() {
    this.voteList = [];
  }

  onFocus() {
    console.log('Input focused');
  }


  onVote(index: number) {
    if (this.voteList.indexOf(index) !== -1) {
      this.voteList = this.voteList.filter(voteIndex => voteIndex !== index);
      return
    } else {
      this.voteList.push(index);
      console.log(index);
    }    
  }

  getVotedEmployees() {
    // get voted employees
    return this.employees.filter((employee, index) => {
      return this.voteList.indexOf(index) !== -1;}).map((employee, index) => employee.name);
  }

  addEmp() {
    this.employees.push({ name: 'New Employee', age: 30, vote: 0, avatar: 'https://randomuser.me/api/portraits' });
  }

  ubah() {
    if (this.employees.length > 0) {
      this.employees[0].name = 'Ali Updated';
      this.employees[0].age = 35;
      this.employees[0].vote = 1;
      this.employees[0].avatar = 'https://randomuser.me/api/portraits'
    }
  }

  trackByFn(index: number, employee: any) {
    return employee.name; // or employee.id if you have an id property
  }
}
