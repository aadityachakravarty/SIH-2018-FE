import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeApplicationsListComponent } from './applications/employee-applications-list/employee-applications-list.component';

const employeeRoutes: Routes = [
  { path: 'employee/home', component: EmployeeHomeComponent },
  { path: 'employee/new-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/new-applications/:id', component: EmployeeHomeComponent },
  { path: 'employee/progress-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/progress-applications/:id', component: EmployeeHomeComponent },
  { path: 'employee/priority-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/priority-applications/:id', component: EmployeeHomeComponent },
  { path: 'employee/completed-applications/list', component: EmployeeApplicationsListComponent },
  { path: 'employee/completed-applications/:id', component: EmployeeHomeComponent }
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
