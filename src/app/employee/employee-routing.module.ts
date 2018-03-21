import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

const employeeRoutes: Routes = [
  { path: 'employee/home', component: EmployeeHomeComponent },
  { path: 'employee/new-applications/list', component: EmployeeHomeComponent },
  { path: 'employee/new-applications/:id', component: EmployeeHomeComponent },
  { path: 'employee/progress-applications/list', component: EmployeeHomeComponent },
  { path: 'employee/progress-applications/:id', component: EmployeeHomeComponent },
  { path: 'employee/priority-applications/list', component: EmployeeHomeComponent },
  { path: 'employee/priority-applications/:id', component: EmployeeHomeComponent },
  { path: 'employee/completed-applications/list', component: EmployeeHomeComponent },
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
