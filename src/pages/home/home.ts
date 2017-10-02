import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculatePage } from './../calculate/calculate';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
age = 34;
weight = 90;
height = 160;
activity;
public bmi;
public bmr;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.calculateBMI();
    this.calculateBMR();
  }
public getAge($event){
  // console.log(this.age);
}

public getWeight($event){
  // console.log(this.weight);
}

public getHeight($event){
  // console.log(this.height);
}
calculateBMI(){
this.bmi = this.weight/(Math.pow(this.height/100,2));
this.bmi = parseFloat(this.bmi).toFixed(2);
}

calculateBMR(){
this.bmr =   66 + (13.7 * this.weight) + (5 * this.height) - (6.8 *this.age);
this.bmr = parseFloat(this.bmr).toFixed(2);
}
goToCal() {
  this.navCtrl.push(CalculatePage, {
      ages: this.age,
      weights: this.weight,
      heights: this.height,
      activities: this.activity,
      bmi: this.bmi,
      bmr: this.bmr
    })
}
}
