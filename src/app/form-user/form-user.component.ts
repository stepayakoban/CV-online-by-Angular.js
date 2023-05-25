import { Component } from '@angular/core';
import {  Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  formUser: FormGroup;
  constructor() {
    this.formUser = new FormGroup({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', Validators.required),
      physicalAdress: new FormControl('', [Validators.required]),
      profession: new FormControl('', Validators.required),
      phone: new FormControl('',[Validators.required,Validators.pattern(/^\+373\d{8}$/)]),
})
}

}
