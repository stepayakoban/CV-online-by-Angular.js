import { Component, ViewChild } from '@angular/core';
import { FormUserComponent } from './form-user/form-user.component';
import { TranslateService } from '@ngx-translate/core';
import { FormEducationComponent } from './form-education/form-education.component';
import { FormJobComponent } from './form-job/form-job.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CV-online';
  @ViewChild(FormUserComponent)
  formUser!: FormUserComponent;
  @ViewChild(FormEducationComponent)
  formEducation!: FormEducationComponent;
  @ViewChild(FormJobComponent)
  formJob!: FormJobComponent;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  saveUserData() {
   
    const formUserValid = this.formUser.valid;
    const formEducationValid = this.formEducation.valid;
    const formJobValid = this.formJob.valid;
  
    
    if (formUserValid && formEducationValid && formJobValid) {
      const userData = {
        formUser: {
          firstName: this.formUser.formUser.get('firstName')?.value,
          
        },
        formEducation: {
          
        },
        formJob: {
          
        }
      };
  
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      
      if (!formUserValid) {
        this.formUser.formUser.markAllAsTouched();
      }
      if (!formEducationValid) {
        this.formEducation.formEducation.markAllAsTouched();
      }
      if (!formJobValid) {
        this.formJob.formJob.markAllAsTouched();
      }
    }
  }
  
}
