import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrl: './employee-item.component.css'
})
export class EmployeeItemComponent {
  @Input() employee : { name: string; age: number; vote: number; avatar: string };
  @Input() index: number;
  @Output() vote  = new EventEmitter<number>();

  isVoted: boolean = false;

  constructor() {
    this.employee = { name: 'Jhon Doe', age: 30, vote: 0, avatar: 'https://randomuser.me/api/portraits'};
    this.index = 0;
  }  

  onVote() {
    this.vote.emit(this.index);
    this.isVoted = !this.isVoted;
  }

  getColor() {
    return this.isVoted ? 'red' : 'green';
  }
}
