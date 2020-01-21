import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Route, Router} from '@angular/router';
import {AuthenticationService} from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Meteo',
      url: '/meteo',
      icon: 'sunny'
    },
    {
      title: 'Calculatrice',
      url: '/calculatrice',
      icon: 'calculator'

    }
    ,
    {
      title: 'Etudiant',
      url: '/etudiants',
      icon: 'school'

    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthenticationService,
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
     
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login();
    });
  }

  private  login() {
    
    let user;
    const authenticated = this.authService.login(user.username, user.password);
    if (authenticated) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/login');
    }
    this.router.navigateByUrl('/login');
  }
}
