import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  permanentAddressDropdown = 'Select Address';
  permanentAddressValue = 'L-482, Ram Lal Chowk, Model Town, Panipat, Haryana';

  constructor(private router: Router, private route: ActivatedRoute) { }

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

  onPermanentAddress(data: string) {
    this.permanentAddressDropdown = data;
    this.newApplicationForm.patchValue({
      'permanentAddress': data
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
    this.router.navigate(['preview'], {relativeTo: this.route});
  }

}
