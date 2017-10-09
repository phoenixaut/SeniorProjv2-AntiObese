import { RegisterPage } from './../pages/register/register';
import { FirstPage } from './../pages/first/first';
import { FlagPage } from './../pages/flag/flag';
import { PlanPage } from './../pages/plan/plan';
import { MygoalPage } from './../pages/mygoal/mygoal';
import { ActivityPage } from './../pages/activity/activity';
import { MainPage } from './../pages/main/main';
import { UserPage } from './../pages/user/user';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CalculatePage} from '../pages/calculate/calculate'

export const firebaseConfig = {
  apiKey: "AIzaSyApv2GEUfmnRHUIp8WrGrQVm4S1lZ3nnE8",
  authDomain: "wirelessproj-9f748.firebaseapp.com",
  databaseURL: "https://wirelessproj-9f748.firebaseio.com",
  projectId: "wirelessproj-9f748",
  storageBucket: "wirelessproj-9f748.appspot.com",
  messagingSenderId: "717465424284"
};

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
    CalculatePage,
    FlagPage,
    FirstPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
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
    CalculatePage,
    FlagPage,
    FirstPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
