import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

interface educationTypes {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit {
  valid: any;
  checkValidity() {
    throw new Error('Method not implemented.');
  }
  markFieldsAsInvalid() {
    throw new Error('Method not implemented.');
  }
  types: educationTypes[] = [
    { value: 'bachelor', viewValue: 'Bachelor' },
    { value: 'lyceum', viewValue: 'Lyceum' },
    { value: 'superior', viewValue: 'Superior' },
    { value: 'master', viewValue: 'Master' },
  ];
  
  formEducation: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formEducation = this.formBuilder.group({
      educationForms: this.formBuilder.array([])
      
    }); 
  }

  ngOnInit(): void {
    const initialForm = this.createEducationForm();
    this.educationForms.push(initialForm);

  }

  createEducationForm():  FormGroup {
    return this.formBuilder.group({
      educationTitle: ['', Validators.required],
      graduateDate: ['', Validators.required],
      educationType: ['', Validators.required]
    });

  }

  get educationForms() {
    return this.formEducation.get('educationForms') as FormArray;
  }

  addFormEducation() {
    const newForm = this.createEducationForm();
    this.educationForms.push(newForm);
  }

  removeEducationForm(index: number): void {
    this.educationForms.removeAt(index);
  }
}
