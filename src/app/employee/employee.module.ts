import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewApplicationsComponent } from './applications/new-applications/new-applications.component';
import { ProgressApplicationsComponent } from './applications/progress-applications/progress-applications.component';
import { PriorityApplicationsComponent } from './applications/priority-applications/priority-applications.component';
import { CompletedApplicationsComponent } from './applications/completed-applications/completed-applications.component';
import { BaseMapComponent } from './base-map/base-map.component';
import { RulesRegulationsComponent } from './rules-regulations/rules-regulations.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeApplicationsListComponent } from './applications/employee-applications-list/employee-applications-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md/index';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MDBBootstrapModule
  ],
  declarations: [
    NewApplicationsComponent,
    ProgressApplicationsComponent,
    PriorityApplicationsComponent,
    CompletedApplicationsComponent,
    BaseMapComponent,
    RulesRegulationsComponent,
    EmployeeHomeComponent,
    EmployeeApplicationsListComponent
  ]
})
export class EmployeeModule { }
