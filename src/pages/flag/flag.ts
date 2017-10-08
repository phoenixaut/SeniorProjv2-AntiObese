import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flag',
  templateUrl: 'flag.html',
})

export class FlagPage {
  public tdee = 0.00;
  public bmr = 0.00;
  public NofRice = 0.00;
  public NofVegies = 0.00;
  public NofFruits = 0.00;
  public NofMeats = 0.00;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bmr = navParams.get("bmr2");
    this.tdee = navParams.get("tdee2");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlagPage');
    console.log(this.bmr + " " + this.tdee);
    this.calculateRice();
    this.calculateFruits();
    this.calculateMeat();
    this.calculateVegies();
    console.log("MEAT: " + this.NofMeats + " Rice: " + this.NofRice + " Fruits: " + this.NofFruits + " Vegies: " + this.NofVegies);
    
    
  }
calculateRice(){
  this.NofRice = Math.round(this.bmr * 0.005*2)/2;
  console.log(this.NofRice);
}
calculateVegies(){
  this.NofVegies = Math.round(this.bmr * 0.0025*2)/2;
}
calculateFruits(){
  this.NofFruits = Math.round(this.bmr * 0.0025*2)/2;
  this.NofFruits = this.NofFruits - 1;
}
calculateMeat(){
  this.NofMeats = Math.round(this.bmr * 0.00133*2)/2;
}
}
