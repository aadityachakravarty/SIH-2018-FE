import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md/index';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    AdminRoutingModule
  ],
  declarations: []
})
export class AdminModule { }
