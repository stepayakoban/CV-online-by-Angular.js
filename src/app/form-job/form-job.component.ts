import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-job',
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.css']
})
export class FormJobComponent {
  valid: any;
  checkValidity() {
    throw new Error('Method not implemented.');
  }
  markFieldsAsInvalid() {
    throw new Error('Method not implemented.');
  }
  formJob: FormGroup;
  fieldStates: boolean[] = []; // Track the checkbox states for each form

  constructor(private formBuilder: FormBuilder) {
    this.formJob = this.formBuilder.group({
      jobForms: this.formBuilder.array([])
    });
  }

  createJobForm(): FormGroup {
    return this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      city: ['', Validators.required],
      companyName: ['', Validators.required]
    });
  }

  toggleCheckbox(index: number): void {
    this.fieldStates[index] = !this.fieldStates[index];

    const endDateControl = this.jobForms.controls[index].get('endDate');
    if (this.fieldStates[index]) {
      endDateControl?.disable();
    } else {
      endDateControl?.enable();
    }
  }
  removeFormJob(index: number): void {
    this.jobForms.removeAt(index);
    this.fieldStates.splice(index, 1);
  }

  get jobForms() {
    return this.formJob.get('jobForms') as FormArray;
  }

  ngOnInit(): void {
    const initialForm = this.createJobForm();
    this.jobForms.push(initialForm);
    this.fieldStates.push(false);
  }

  addFormJob() {
    const newForm = this.createJobForm();
    this.jobForms.push(newForm);
    this.fieldStates.push(false);
  }
}
