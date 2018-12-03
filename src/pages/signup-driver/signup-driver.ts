import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Driver } from '../../interfaces/Driver';
import { UserTypes, User } from '../../interfaces/User';
import { AppProvider } from '../../providers/AppProvider';

/**
 * Generated class for the SignupDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-driver',
  templateUrl: 'signup-driver.html',
})
export class SignupDriverPage {

  private user:User;
  private driver:Driver;

  constructor(public navCtrl: NavController, public navParams: NavParams, private home: HomePage, private appProvider: AppProvider) {
    this.user = {
      username:'',
      password:'',
      userType:UserTypes.Driver
    };
    this.driver = {
      userId:'',
      firstName:'',
      lastName:'',
      licensePlate:'',
      vehicleType:''
    }
  }

  go() {
    this.appProvider.signUpDriver(this.user, this.driver);
    this.home.goToSlide(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupDriverPage');
  }

}
