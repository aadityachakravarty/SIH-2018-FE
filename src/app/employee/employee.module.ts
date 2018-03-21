import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewApplicationsComponent } from './applications/new-applications/new-applications.component';
import { ProgressApplicationsComponent } from './applications/progress-applications/progress-applications.component';
import { PriorityApplicationsComponent } from './applications/priority-applications/priority-applications.component';
import { CompletedApplicationsComponent } from './applications/completed-applications/completed-applications.component';
import { BaseMapComponent } from './base-map/base-map.component';
import { RulesRegulationsComponent } from './rules-regulations/rules-regulations.component';
import { ApplicationListComponent } from './applications/application-list/application-list.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [
    NewApplicationsComponent,
    ProgressApplicationsComponent,
    PriorityApplicationsComponent,
    CompletedApplicationsComponent,
    BaseMapComponent,
    RulesRegulationsComponent,
    ApplicationListComponent,
    EmployeeHomeComponent
  ]
})
export class EmployeeModule { }
