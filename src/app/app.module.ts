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
import { BioInformationComponent } from './components/profile/dashboard-patient/bio-information/bio-information.component';
import { MeasurementsComponent } from './components/profile/dashboard-patient/measurements/measurements.component';
import { DependantRegisterComponent } from './components/register/dependant/dependant-register.component';
import { UserRegisterComponent } from './components/register/patient-doctor/user-register.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { AppStateService } from './services/app-state.service';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './components/profile/dashboard-patient/reports/reports.component';
import { VaccinationsComponent } from './components/profile/dashboard-patient/vaccinations/vaccinations.component';
import { MedicationComponent } from './components/profile/dashboard-patient/medication/medication.component';
import { CriticalIllnessComponent } from './components/profile/dashboard-patient/critical-illness/critical-illness.component';
import { RegisterComponent } from './components/register/register.component';
import { HospitalRegisterComponent } from './components/register/hospital/hospital-register.component';
import { DashboardDoctorComponent } from './components/profile/dashboard-doctor/dashboard-doctor.component';
import { DashboardHospitalComponent } from './components/profile/dashboard-hospital/dashboard-hospital.component';
import { DashboardPatientComponent } from './components/profile/dashboard-patient/dashboard-patient.component';
import { BioInformationDoctorComponent } from './components/profile/dashboard-doctor/bio-information/bio-information.component';
import { BioInformationHospitalComponent } from './components/profile/dashboard-hospital/bio-information/bio-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HospitalLoginComponent,
    UserLoginComponent,
    RecentLoginsComponent,
    ProfileComponent,
    BioInformationComponent,
    BioInformationDoctorComponent,
    BioInformationHospitalComponent,
    MeasurementsComponent,
    RegisterComponent,
    HospitalRegisterComponent,
    DependantRegisterComponent,
    UserRegisterComponent,
    SettingsComponent,
    NewsFeedComponent,
    DashboardDoctorComponent,
    DashboardHospitalComponent,
    DashboardPatientComponent,
    HeaderComponent,
    FooterComponent,
    ReportsComponent,
    VaccinationsComponent,
    MedicationComponent,
    CriticalIllnessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppStateService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
