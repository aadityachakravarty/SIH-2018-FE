import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewApplicationComponent } from './application/new-application/new-application.component';

const consumerRoutes: Routes = [
  { path: 'consumer/home', component: HomeComponent },
  { path: 'consumer/new-application', component: NewApplicationComponent}
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
