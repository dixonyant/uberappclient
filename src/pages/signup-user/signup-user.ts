import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserTypes, User } from '../../interfaces/User';
import { AppProvider } from '../../providers/AppProvider';
import { Rider } from '../../interfaces/Rider';

/**
 * Generated class for the SignupUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-user',
  templateUrl: 'signup-user.html',
})
export class SignupUserPage {

  private user:User;
  private rider:Rider;

  constructor(public navCtrl: NavController, public navParams: NavParams, private home: HomePage, private appProvider:AppProvider) {
    this.user = {
      username:'',
      password:'',
      userType:UserTypes.Rider
    }

    this.rider = {
      userId:'',
      firstName:'',
      lastName:'',
      card: {
        vendor:'',
        cardNumber:'',
        ccv:undefined,
        expDate:''
      }
    }
  }

  go() {
    this.appProvider.signUpRider(this.user, this.rider);
    this.home.goToSlide(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupUserPage');
  }

}
