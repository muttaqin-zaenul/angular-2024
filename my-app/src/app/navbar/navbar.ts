import { Component } from "@angular/core";


@Component({
    standalone: true,
    selector: 'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
})
export class Navbar {
    constructor() {
        this.init();
    }
    
    init() {
        console.log('Navbar initialized');
        // Additional initialization logic can go here
    }
}