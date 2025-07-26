import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { EmployeesModule } from './employees/employees.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, EmployeesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
