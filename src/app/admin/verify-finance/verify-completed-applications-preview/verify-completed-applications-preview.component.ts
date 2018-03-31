import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-completed-applications-preview',
  templateUrl: './verify-completed-applications-preview.component.html',
  styleUrls: ['./verify-completed-applications-preview.component.css']
})
export class VerifyCompletedApplicationsPreviewComponent implements OnInit {
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
