import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MygoalPage } from './mygoal';

@NgModule({
  declarations: [
    MygoalPage,
  ],
  imports: [
    IonicPageModule.forChild(MygoalPage),
  ],
})
export class MygoalPageModule {}
