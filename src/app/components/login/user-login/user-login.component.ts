import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    this.router.navigate(['profile']);
  }

  register(): void{
    this.router.navigate(['register']);
  }

}
