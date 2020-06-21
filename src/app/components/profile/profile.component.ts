import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  routerLink:string = "";
  constructor(private router:Router) { 
    this.setNavigationRoute(router.url);
  }

  ngOnInit(): void {
  }

  private setNavigationRoute(routerLink:string): void{
    switch(routerLink){
      case('/profile/patient/dashboard'): this.routerLink = "/profile/patient/"; break;
      case('/profile/doctor/dashboard'): this.routerLink  = "/profile/doctor/"; break;
      case('/profile/hospital/dashboard'): this.routerLink  = "/profile/hospital/"; break;
    }
  }
}
