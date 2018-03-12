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

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    ConsumerRoutingModule
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
