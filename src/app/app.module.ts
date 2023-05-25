import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUserComponent } from './form-user/form-user.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FormEducationComponent } from './form-education/form-education.component';
import { FormJobComponent } from './form-job/form-job.component';
import { SaveProfileComponent } from './save-profile/save-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    SocialMediaComponent,
    FormEducationComponent,
    FormJobComponent,
    SaveProfileComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
