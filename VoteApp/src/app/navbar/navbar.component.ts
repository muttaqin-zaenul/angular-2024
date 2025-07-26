import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  appName: string = 'VoteApp';

  constructor() {
    // Initialization logic can go here if needed
  }

}
