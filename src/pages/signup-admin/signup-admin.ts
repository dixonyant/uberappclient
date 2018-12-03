import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from '../../providers/AppProvider';
import { User, UserTypes } from '../../interfaces/User'

/**
 * Generated class for the SignupAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-admin',
  templateUrl: 'signup-admin.html',
})
export class SignupAdminPage {

  private user:User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private home: HomePage, private appProvider: AppProvider) {
    this.user = {
      username:'',
      password:'',
      userType:UserTypes.Admin
    }
  }

  go() {
    this.appProvider.signUpAdmin(this.user);
    this.home.goToSlide(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupAdminPage');
  }

}
