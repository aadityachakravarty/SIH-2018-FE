import { Component, OnInit } from '@angular/core';
import { UpdateApplication } from '../../../consumer/application/update-application/update-application.model';

@Component({
  selector: 'app-verify-new-applications-preview',
  templateUrl: './verify-new-applications-preview.component.html',
  styleUrls: ['./verify-new-applications-preview.component.css']
})
export class VerifyNewApplicationsPreviewComponent implements OnInit {
  changeNameData = {
    'applicationNumber': 'LJXSDHT9879SDAF8',
    'applicantName': 'Anshul Sharma',
    'fatherName_husbandName': 'Satish Kumar',
    'aadharNumber': 600487597412,
    'mobileNumber': '9996999200',
    'email': 'anshulsharma0888@gmail.com',
    'paymentStatus': 'Paid',
    'permanentAddress': 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana',
    'connectionAddress': 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana',
    'uploadedDocument': 'Passport',
    'connectionCategory': 'Domestic Supply (DS)',
    'connectionType': 'Permanent',
    'voltageSupply': '3 Phase'
  };
  constructor() { }

  ngOnInit() {
  }

}
