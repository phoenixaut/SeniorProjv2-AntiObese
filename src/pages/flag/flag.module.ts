import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlagPage } from './flag';

@NgModule({
  declarations: [
    FlagPage,
  ],
  imports: [
    IonicPageModule.forChild(FlagPage),
  ],
})
export class FlagPageModule {}
