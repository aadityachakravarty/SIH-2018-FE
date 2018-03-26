import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ConsumerModule } from './consumer/consumer.module';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginService } from './core/auth/login.service';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    CoreModule,
    ConsumerModule,
    EmployeeModule,
    AdminModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1lxsfuO9r6EIJ7-CCsp7ebk4Fhbsc9iM', libraries: ['geometry']
    }),
    AgmDirectionModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
