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
  public activity = 3;
  public weightChange;
  public weightDefault;
  public weightMin;
  public weightMax;
  public dayChange = 0;
  public day;
  public dayDefalut: number[] = [];
  public monthDefalut: number[];
  public bmi = 0.00;
  public bmr = 0.00;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ages = navParams.get("ages");
    this.weights = navParams.get("weights");
    this.heights = navParams.get("heights");
    this.bmi = navParams.get("bmi");
    this.bmr = navParams.get("bmr");

    // this.activity = navParams.get("activities");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
    // console.log(this.ages + " " + this.weights + " " + this.heights +" "+ this.activity);
    this.calculateWeight();
    this.calculateDay();
    // console.log(this.bmi + " " + this.bmr);
    
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

adjustWeightDe(){
  if(this.weightChange !> this.weightMin)
  {
    this.weightChange--;
    this.calculateDay();
  }
  

}

adjustWeightIn(){
  if(this.weightChange !< this.weightMax)
  {
    this.weightChange++;
    this.calculateDay();
  }
  
}

//this method is to calculate amount of day that is depend on weight goal
calculateDay(){
  this.dayDefalut = [];
  this.day = this.weights - this.weightChange;
  this.dayDefalut.push(Math.ceil((this.day / 2)*28));
  this.dayDefalut.push(Math.ceil((this.day / 2.4)*28));
  this.dayDefalut.push(Math.ceil((this.day / 2.8)*28));
  this.dayDefalut.push(Math.ceil((this.day / 3.2)*28));
  this.dayDefalut.push(Math.ceil((this.day / 3.6)*28));
  this.dayDefalut.push(Math.ceil((this.day / 4.0)*28));
  console.log(this.dayDefalut);
  this.dayChange = this.dayDefalut[2];
}
public counter = 0;

adjustDayDe(){
  if(--this.counter < 0)this.counter = 5;
  this.dayChange = this.dayDefalut[this.counter];
}
adjustDayIn(){
  if(++this.counter > 5) this.counter = 0;
  this.dayChange = this.dayDefalut[this.counter];
}


}
