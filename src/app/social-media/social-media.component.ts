import { Component } from '@angular/core';
import {  FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
socialMediaForm:FormGroup;

constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
  this.socialMediaForm = this.formBuilder.group({
    socialLinks: this.formBuilder.array([])
  });
  translate.setDefaultLang('en');

         
        translate.use('en');
}
switchLanguage(lang: string) {
  
      this.translate.use(lang);
    
    
      
  }

createSocialForm(): FormGroup {
  return this.formBuilder.group({
    socialLink: ['', Validators.required],
    
  });
}
get socialLinks() {
  return this.socialMediaForm.get('socialLinks') as FormArray;
}

addSocialForm() {
  const newForm = this.createSocialForm();
  this.socialLinks.push(newForm);
  
}
removeSocialForm(index: number): void {
  this.socialLinks.removeAt(index);
 
}
}
