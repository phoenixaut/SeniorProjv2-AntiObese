import { RegisterPage } from './../pages/register/register';
import { FirstPage } from './../pages/first/first';
import { PlanPage } from './../pages/plan/plan';
import { MygoalPage } from './../pages/mygoal/mygoal';
import { ActivityPage } from './../pages/activity/activity';
import { MainPage } from './../pages/main/main';
import { UserPage } from './../pages/user/user';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CalculatePage} from '../pages/calculate/calculate'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FirstPage;

  pages: Array<{title: string, component: any}>;
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'User', component: UserPage},
      { title: 'Main', component: MainPage},
      { title: 'Activity', component: ActivityPage},
      { title: 'Mygoal', component: MygoalPage},
      { title: 'Plan', component: PlanPage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
