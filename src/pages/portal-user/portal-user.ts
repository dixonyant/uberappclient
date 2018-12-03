import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RequestPickupPage } from '../request-pickup/request-pickup';
import { AppProvider } from '../../providers/AppProvider';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the PortalUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portal-user',
  templateUrl: 'portal-user.html',
})
export class PortalUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private appProvider: AppProvider) {
  }

  logout() {
    this.appProvider.signOut();
    this.navCtrl.setRoot(HomePage);
    this.appProvider.presentToast('Log out successful.');
  }

  requestPickup() {
    this.navCtrl.push(RequestPickupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortalUserPage');
  }

}
