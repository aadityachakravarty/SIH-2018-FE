import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeApplicationsListComponent } from './applications/employee-applications-list/employee-applications-list.component';
import { NewApplicationsComponent } from './applications/new-applications/new-applications.component';
import { ProgressApplicationsComponent } from './applications/progress-applications/progress-applications.component';
import { PriorityApplicationsComponent } from './applications/priority-applications/priority-applications.component';
import { CompletedApplicationsComponent } from './applications/completed-applications/completed-applications.component';

const employeeRoutes: Routes = [
  { path: 'employee/home', component: EmployeeHomeComponent },
  { path: 'employee/new-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/new-applications/:id', component: NewApplicationsComponent },
  { path: 'employee/progress-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/progress-applications/:id', component: ProgressApplicationsComponent },
  { path: 'employee/priority-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/priority-applications/:id', component: PriorityApplicationsComponent },
  { path: 'employee/completed-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/completed-applications/:id', component: CompletedApplicationsComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(employeeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule {}
