import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { BioInformationComponent } from './components/profile/dashboard-patient/bio-information/bio-information.component';
import { MeasurementsComponent } from './components/profile/dashboard-patient/measurements/measurements.component';
import { DependantRegisterComponent } from './components/register/dependant/dependant-register.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/profile/dashboard-patient/reports/reports.component';
import { VaccinationsComponent } from './components/profile/dashboard-patient/vaccinations/vaccinations.component';
import { MedicationComponent } from './components/profile/dashboard-patient/medication/medication.component';
import { CriticalIllnessComponent } from './components/profile/dashboard-patient/critical-illness/critical-illness.component';
import { DashboardPatientComponent } from './components/profile/dashboard-patient/dashboard-patient.component';
import { DashboardDoctorComponent } from './components/profile/dashboard-doctor/dashboard-doctor.component';
import { BioInformationDoctorComponent } from './components/profile/dashboard-doctor/bio-information/bio-information.component';
import { DashboardHospitalComponent } from './components/profile/dashboard-hospital/dashboard-hospital.component';
import { BioInformationHospitalComponent } from './components/profile/dashboard-hospital/bio-information/bio-information.component';
import { HospitalRegisterComponent } from './components/register/hospital/hospital-register.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorRegisterComponent } from './components/register/doctor/doctor-register.component';
import { UserRegisterComponent } from './components/register/patient/user-register.component';
import { DoctorPmicComponent } from './components/profile/dashboard-doctor/doctor-pmic/doctor-pmic.component';
import { DoctorDrugsComponent } from './components/profile/dashboard-doctor/doctor-drugs/doctor-drugs.component';
import { DoctorPrescriptionComponent } from './components/profile/dashboard-doctor/doctor-prescription/doctor-prescription.component';
import { UserManagementComponent } from './components/profile/dashboard-doctor/user-management/user-management.component';


const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "profile", component: ProfileComponent,
    children: [
      {path: "", redirectTo: "patient", pathMatch: "full"},
      {
        path: "patient",
        children: [
          { path: "", redirectTo: "dashboard", pathMatch: "full" },
          { path: 'dashboard', component: DashboardPatientComponent },
          { path: 'bio-info', component: BioInformationComponent },
          { path: 'measurements', component: MeasurementsComponent },
          { path: 'reports', component: ReportsComponent },
          { path: 'vaccinations', component: VaccinationsComponent },
          { path: 'medication', component: MedicationComponent },
          { path: 'illnesses', component: CriticalIllnessComponent }
        ]
      },
      {
        path: "doctor", 
        children: [
          { path: "", redirectTo: "dashboard", pathMatch: "full" },
          { path: 'dashboard', component: DashboardDoctorComponent },
          { path: 'bio-info', component: BioInformationDoctorComponent },
          { path: 'pmic', component: DoctorPmicComponent },
          { path: 'drugs', component: DoctorDrugsComponent },
          { path: 'prescription', component: DoctorPrescriptionComponent },
          { path: 'user-management', component: UserManagementComponent }
        ]
      },
      {
        path: "hospital", 
        children: [
          { path: "", redirectTo: "dashboard", pathMatch: "full" },
          { path: 'dashboard', component: DashboardHospitalComponent },
          { path: 'bio-info', component: BioInformationHospitalComponent },
        ]
      },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "register/user", component: UserRegisterComponent, pathMatch: "full" },
  { path: "register/doctor", component: DoctorRegisterComponent, pathMatch: "full" },
  { path: "register/hospital", component: HospitalRegisterComponent, pathMatch: "full" },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
