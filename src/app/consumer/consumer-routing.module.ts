import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewApplicationComponent } from './application/new-application/new-application.component';
import { UpdateApplicationComponent } from './application/update-application/update-application.component';
import { ChangeNameComponent } from './application/update-application/change-name/change-name.component';
import { ChangeLoadComponent } from './application/update-application/change-load/change-load.component';
import { CloseApplicationComponent } from './application/update-application/close-application/close-application.component';
import { YourApplicationsComponent } from './application/your-applications/your-applications.component';

const consumerRoutes: Routes = [
  { path: 'consumer/home', component: HomeComponent },
  { path: 'consumer/new-application', component: NewApplicationComponent },
  { path: 'consumer/update-application', component: UpdateApplicationComponent, children: [
      { path: 'change-name', component: ChangeNameComponent },
      { path: 'change-load', component: ChangeLoadComponent },
      { path: 'close-application', component: CloseApplicationComponent }
    ]
  },
  { path: 'consumer/your-applications', component: YourApplicationsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(consumerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConsumerRoutingModule {

}
