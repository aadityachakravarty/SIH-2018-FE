import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  newApplicationForm: FormGroup;
  connectionCategoryDropdown = 'Select Option';
  connectionTypeDropdown = 'Select Option';
  voltageSupplyDropdown = 'Select Option';

  constructor() { }

  ngOnInit() {
    this.newApplicationForm = new FormGroup({
      'applicantName': new FormControl(null),
      'fatherName_husbandName': new FormControl(null),
      'mobileNumber': new FormControl(null),
      'email': new FormControl(null),
      'permanentAddress': new FormControl(null),
      'connectionAddress': new FormControl(null),
      'connectionAddressLandRegistrationNumber': new FormControl(null),
      'loadDemand': new FormControl(null),
      'connectionCategory': new FormControl(null),
      'connectionType': new FormControl(null),
      'voltageSupply': new FormControl(null)
    });
  }

  onConnectionCategory(data: string) {
    this.connectionCategoryDropdown = data;
    this.newApplicationForm.patchValue({
      'connectionCategory': data
    });
  }

  onConnectionType(data: string) {
    this.connectionTypeDropdown = data;
    this.newApplicationForm.patchValue({
      'connectionType': data
    });
  }

  onVoltageSupply(data: string) {
    this.voltageSupplyDropdown = data;
    this.newApplicationForm.patchValue({
      'voltageSupply': data
    });
  }

  onNewApplicationForm() {
    console.log(this.newApplicationForm);
  }

}
