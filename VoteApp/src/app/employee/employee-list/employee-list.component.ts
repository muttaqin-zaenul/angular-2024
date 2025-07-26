import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  voteList : number[];

    employees = [
    { name: 'Ali', age: 28, vote: 0 },
    { name: 'Bob', age: 34, vote: 0 },
    { name: 'Cha', age: 25, vote: 0 }
  ];

  constructor() {
    this.voteList = [];
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
}
