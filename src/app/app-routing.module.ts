import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { BioInformationComponent } from './components/profile/bio-information/bio-information.component';
import { MeasurementsComponent } from './components/profile/measurements/measurements.component';
import { UserRegisterComponent } from './components/register/patient-doctor/user-register.component';
import { DependantRegisterComponent } from './components/register/dependant/dependant-register.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "profile", component: ProfileComponent,
    children: [
      { path: 'bio-info', component: BioInformationComponent },
      { path: 'measurements', component: MeasurementsComponent },
      { path: 'settings', component: SettingsComponent },
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
