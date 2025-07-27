import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeModule } from './employee/employee.module';
import { ContentProjectionDemoComponent } from './content-projection-demo/content-projection-demo.component';
import { UtilityModule } from './utility/utility.module';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id'; // Import Indonesian locale

registerLocaleData(localeId); // Register Indonesian locale

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentProjectionDemoComponent,
    PipesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    UtilityModule,
    FormsModule
  ],
  providers: [
    { 
      provide: LOCALE_ID,
      useValue: 'id-ID' // Set the locale to Indonesian
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
