import { FlagPage } from './../flag/flag';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculate',
  templateUrl: 'calculate.html',
})
export class CalculatePage {
  public ages;
  public weights;
  public heights;
  public activity=0;
  public weightChange;
  public weightDefault;
  public weightMin;
  public weightMax;
  public dayChange = 0;
  public day;
  public dayDefalut;
  public monthDefalut: number[];
  public dayDefalut2: number[] = [];
  public factorDefalut: number[] = [0.5,0.6,0.7,0.8,0.9,1];
  public factorChange = this.factorDefalut[0];
  public bmi = 0.00;
  public bmr = 0.00;
  public tdee = 0.00;
  public bmr2 = 0.00;
  public tdee2 = 0.00;
  public counter2 = 0;
  public calPerDay;
  public gender;
  public myDate = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weights = navParams.get("weights");
    this.heights = navParams.get("heights");
    this.bmi = navParams.get("bmi");
    this.activity = navParams.get("activities");
    this.gender = navParams.get("gender");
    this.myDate = navParams.get("birthDate");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
    this.ages = this.calculateAge(this.myDate);
    // console.log(this.ages + " " + this.weights + " " + this.heights +" "+ this.activity);
    if(this.gender == 1){
      this.bmr =   66 + (13.7 * this.weights) + (5 * this.heights) - (6.8 * this.ages);
    }else if(this.gender == 2){
      this.bmr =   665 + (9.6 * this.weights) + (1.8 * this.heights) - (4.7 * this.ages);
      
    }
    this.calculateWeight();
    this.calculateDay();
    this.calculateTdee();
    this.calculateCal();
    console.log("BMI= "+this.bmi + " " +"BMR= "+ this.bmr);
    // console.log(this.tdee);
    // console.log("Gender "+this.gender);
    // console.log(Date.now());
    
    

  }
  public calculateAge(birthday) { // birthday is a date
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
  //this method is to calculate minimum and maximum of weight for suitable people
calculateWeight(){
  this.weightDefault = this.heights / 100;
  this.weightDefault = this.weightDefault * this.weightDefault;
  this.weightMin = Math.ceil(this.weightDefault * 18.5);
  this.weightMax = Math.floor(this.weightDefault * 24.99);
  this.weightDefault = Math.floor(this.weightDefault * 21.745);
  this.weightChange = this.weightDefault;
  console.log(this.weightMin + " " + this.weightDefault + " " + this.weightMax);

}

calculateTdee(){
if(this.activity == 1){
  this.tdee = 1.2 * this.bmr;
}else if(this.activity == 2){
  this.tdee = 1.375 * this.bmr;
}else if(this.activity == 3){
  this.tdee = 1.55 * this.bmr;
}else if(this.activity == 4){
  this.tdee = 1.7 * this.bmr;
}else if(this.activity == 5){
  this.tdee = 1.9 * this.bmr;
}

}
adjustWeightDe(){
  if(this.weightChange !> this.weightMin)
  {
    this.weightChange--;
    this.calculateDay();
  }
this.calculateCal();

}

adjustWeightIn(){
  if(this.weightChange !< this.weightMax)
  {
    this.weightChange++;
    this.calculateDay();
  }
  this.calculateCal();
}

//this method is to calculate amount of day that is depend on weight goal
calculateDay(){
  this.dayDefalut2 = [];
  this.day = Math.abs(this.weights - this.weightChange);
  switch(this.counter2) {
    case 0:
        this.dayDefalut = (Math.ceil((this.day / 2)*28));
        break;
    case 1:
        this.dayDefalut = (Math.ceil((this.day / 2.4)*28));
        break;
    case 2:
        this.dayDefalut = (Math.ceil((this.day / 2.8)*28));
        break;
    case 3:
        this.dayDefalut = (Math.ceil((this.day / 3.2)*28));
        break;
    case 4:
        this.dayDefalut = (Math.ceil((this.day / 3.6)*28));
        break;
    case 5:
        this.dayDefalut = (Math.ceil((this.day / 4)*28));
        break;
}

// this.dayDefalut2.push(Math.ceil((this.day / 2)*28));
// this.dayDefalut2.push(Math.ceil((this.day / 2.4)*28));
// this.dayDefalut2.push(Math.ceil((this.day / 2.8)*28));
// this.dayDefalut2.push(Math.ceil((this.day / 3.2)*28));
// this.dayDefalut2.push(Math.ceil((this.day / 3.6)*28));
// this.dayDefalut2.push(Math.ceil((this.day / 4.0)*28));
//   console.log(this.dayDefalut2);
  this.dayChange = this.dayDefalut;
}
public counter = 0;

adjustDayDe(){
  if(--this.counter < 0)this.counter = 5;
  {
    this.dayChange = this.dayDefalut[this.counter];
  }
  
}
adjustDayIn(){
  if(++this.counter > 5) this.counter = 0;
  {
    this.dayChange = this.dayDefalut[this.counter];
  }
  
}


adjustFactorDe(){
if(--this.counter2 < 0)this.counter2 = 5;{
  this.factorChange = this.factorDefalut[this.counter2];
  this.calculateDay();
  this.calculateCal();
}
}

adjustFactorIn(){
  if(++this.counter2 > 5)this.counter2 = 0;{
    this.factorChange = this.factorDefalut[this.counter2];
    this.calculateDay();
    this.calculateCal();
  }
}

calculateCal(){
  this.calPerDay = Math.abs(this.weights - this.weightChange);
  this.calPerDay = this.calPerDay * 7700;
  this.calPerDay = this.calPerDay / this.dayChange;
  this.bmr2 = Math.floor(this.bmr - this.calPerDay);
  this.tdee2 = Math.floor(this.tdee - this.calPerDay);
  console.log("BMR NA " + this.bmr2 + " TDEE NA " + this.tdee2 + "CalperDay: " + this.calPerDay);
}

pushing(){
  this.navCtrl.push(FlagPage, {
    bmr2: this.bmr2,
    tdee2: this.tdee2
  })
}
}
