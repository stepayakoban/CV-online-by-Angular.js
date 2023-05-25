import { Component } from '@angular/core';
import {  Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent {
  formEducation: FormGroup;
  constructor() {
    this.formEducation = new FormGroup({
      educationTitle: new FormControl('', Validators.required),
      graduateDate: new FormControl('', [Validators.required, Validators.email]),
      educationType: new FormControl('', Validators.required),
     
  });  
}
}