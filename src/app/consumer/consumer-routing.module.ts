import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewApplicationComponent } from './application/new-application/new-application.component';
import { UpdateApplicationComponent } from './application/update-application/update-application.component';
import { ChangeNameComponent } from './application/update-application/change-name/change-name.component';
import { ChangeLoadComponent } from './application/update-application/change-load/change-load.component';
import { CloseApplicationComponent } from './application/update-application/close-application/close-application.component';
import { YourApplicationsComponent } from './application/your-applications/your-applications.component';
import { ApplicationListComponent } from './application/update-application/application-list/application-list.component';
import { NewApplicationPreviewComponent } from './application/new-application/new-application-preview/new-application-preview.component';
import { BodyComponent } from './application/update-application/body/body.component';
import { ApplicationComponent } from './application/your-applications/application/application.component';
import { NotificationComponent } from './notification/notification.component';

const consumerRoutes: Routes = [
  { path: 'consumer/home', component: HomeComponent },
  { path: 'consumer/new-application', component: NewApplicationComponent },
  { path: 'consumer/new-application/preview', component: NewApplicationPreviewComponent },
  { path: 'consumer/update-application', component: UpdateApplicationComponent, children: [
      { path: '', component: BodyComponent },
      { path: 'change-name/list', component: ApplicationListComponent },
      { path: 'change-name/list/:id', component: ChangeNameComponent },
      { path: 'change-load/list', component: ApplicationListComponent },
      { path: 'change-load/list/:id', component: ChangeLoadComponent },
      { path: 'close-application/list', component: ApplicationListComponent },
      { path: 'close-application/list/:id', component: CloseApplicationComponent }
    ]
  },
  { path: 'consumer/your-applications', component: YourApplicationsComponent},
  { path: 'consumer/your-applications/:id', component: ApplicationComponent},
  { path: 'consumer-notifications', component: NotificationComponent}
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
