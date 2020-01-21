import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentification.service';
import {Route, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }


  ngOnInit() {
  }

  onLogin(user) {
      const res = this.authService.login(user.username, user.password);
      if (res == true) {
          this.router.navigateByUrl('/home');
      } else {
          this.router.navigateByUrl('/login');
          alert('verfiez vous information');
      }
  }}
