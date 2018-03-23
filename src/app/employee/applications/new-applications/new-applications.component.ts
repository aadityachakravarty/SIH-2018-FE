import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-applications',
  templateUrl: './new-applications.component.html',
  styleUrls: ['./new-applications.component.css']
})
export class NewApplicationsComponent implements OnInit {
  newApplicationPreview = {
    'applicationNumber': 'URJDJCXKW99449WKD',
    'applicantName': 'Anshul Sharma',
    'fatherName_husbandName': 'Satish Kumar',
    'aadharNumber': 600487597412,
    'mobileNumber': '9996999200',
    'email': 'anshulsharma0888@gmail.com',
    'meterNumber': 'APDUR849R9583',
    'connectionAddress': 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana',
    'loadDemand': 4,
    'connectionCategory': 'Domestic Supply (DS)',
    'connectionType': 'Permanent',
    'voltageSupply': '3 Phase',
    'status': 'new' //  status for backend
  };
  constructor() { }

  ngOnInit() {
  }

}
