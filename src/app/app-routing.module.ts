import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { BioInformationComponent } from './components/profile/dashboard/bio-information/bio-information.component';
import { MeasurementsComponent } from './components/profile/dashboard/measurements/measurements.component';
import { UserRegisterComponent } from './components/register/patient-doctor/user-register.component';
import { DependantRegisterComponent } from './components/register/dependant/dependant-register.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/profile/dashboard/dashboard.component';
import { ReportsComponent } from './components/profile/dashboard/reports/reports.component';
import { VaccinationsComponent } from './components/profile/dashboard/vaccinations/vaccinations.component';
import { MedicationComponent } from './components/profile/dashboard/medication/medication.component';
import { CriticalIllnessComponent } from './components/profile/dashboard/critical-illness/critical-illness.component';


const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "profile", component: ProfileComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'bio-info', component: BioInformationComponent },
      { path: 'measurements', component: MeasurementsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'vaccinations', component: VaccinationsComponent },
      { path: 'medication', component: MedicationComponent },
      { path: 'illnesses', component: CriticalIllnessComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: "register/user", component: UserRegisterComponent, pathMatch: "full" },
  { path: "register/dependant", component: DependantRegisterComponent, pathMatch: "full" },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
