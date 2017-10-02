import { PlanPage } from './../pages/plan/plan';
import { MygoalPage } from './../pages/mygoal/mygoal';
import { ActivityPage } from './../pages/activity/activity';
import { MainPage } from './../pages/main/main';
import { UserPage } from './../pages/user/user';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CalculatePage} from '../pages/calculate/calculate'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UserPage,
    MainPage,
    ActivityPage,
    MygoalPage,
    PlanPage,
    CalculatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    UserPage,
    MainPage,
    ActivityPage,
    MygoalPage,
    PlanPage,
    CalculatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
