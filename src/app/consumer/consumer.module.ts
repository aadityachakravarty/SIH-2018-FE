import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NotificationComponent } from './notification/notification.component';
import { NewApplicationComponent } from './application/new-application/new-application.component';
import { UpdateApplicationComponent } from './application/update-application/update-application.component';
import { ClosingApplicationComponent } from './application/closing-application/closing-application.component';
import { YourApplicationsComponent } from './application/your-applications/your-applications.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConsumerRoutingModule } from './consumer-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    ConsumerRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1lxsfuO9r6EIJ7-CCsp7ebk4Fhbsc9iM'
    }),
    AgmDirectionModule
  ],
  declarations: [
    HomeComponent,
    CustomerCareComponent,
    TrackingComponent,
    NotificationComponent,
    NewApplicationComponent,
    UpdateApplicationComponent,
    ClosingApplicationComponent,
    YourApplicationsComponent
  ],
  exports: [
    HomeComponent,
    NewApplicationComponent
  ]
})
export class ConsumerModule { }
