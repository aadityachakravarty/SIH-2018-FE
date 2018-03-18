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
import { ChangeNameComponent } from './application/update-application/change-name/change-name.component';
import { ChangeLoadComponent } from './application/update-application/change-load/change-load.component';
import { CloseApplicationComponent } from './application/update-application/close-application/close-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationListComponent } from './application/update-application/application-list/application-list.component';
import { NewApplicationPreviewComponent } from './application/new-application/new-application-preview/new-application-preview.component';
import { BodyComponent } from './application/update-application/body/body.component';
import { ApplicationComponent } from './application/your-applications/application/application.component';

@NgModule({
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
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
    YourApplicationsComponent,
    ChangeNameComponent,
    ChangeLoadComponent,
    CloseApplicationComponent,
    ApplicationListComponent,
    NewApplicationPreviewComponent,
    BodyComponent,
    ApplicationComponent
  ],
  exports: [
    HomeComponent,
    NewApplicationComponent
  ],
  providers: [
  ]
})
export class ConsumerModule { }
