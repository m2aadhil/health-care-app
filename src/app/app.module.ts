import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/https.service';
import { HomeComponent } from './components/home/home.component';
import { HospitalLoginComponent } from './components/login/hospital-login/hospital.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { RecentLoginsComponent } from './components/login/recent-logins/recent-logins.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BioInformationComponent } from './components/profile/bio-information/bio-information.component';
import { MeasurementsComponent } from './components/profile/measurements/measurements.component';
import { DependantRegisterComponent } from './components/register/dependant/dependant-register.component';
import { UserRegisterComponent } from './components/register/patient-doctor/user-register.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { AppStateService } from './services/app-state.service';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HospitalLoginComponent,
    UserLoginComponent,
    RecentLoginsComponent,
    ProfileComponent,
    BioInformationComponent,
    MeasurementsComponent,
    DependantRegisterComponent,
    UserRegisterComponent,
    SettingsComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppStateService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
