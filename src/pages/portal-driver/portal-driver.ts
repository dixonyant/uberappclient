import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SelectPickupPage } from '../select-pickup/select-pickup';
import { AppProvider } from '../../providers/AppProvider';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the PortalDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portal-driver',
  templateUrl: 'portal-driver.html',
})
export class PortalDriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private appProvider: AppProvider) {
  }

  logout() {
    this.appProvider.signOut();
    this.navCtrl.setRoot(HomePage);
    this.appProvider.presentToast('Log out successful.');
  }

  selectPickup() {
    this.navCtrl.setRoot(SelectPickupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortalDriverPage');
  }

}
