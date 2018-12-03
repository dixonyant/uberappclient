import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/AppProvider';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the PortalAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portal-admin',
  templateUrl: 'portal-admin.html',
})
export class PortalAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private appProvider: AppProvider) {
  
  }

  logout() {
    this.appProvider.signOut();
    this.navCtrl.setRoot(HomePage);
    this.appProvider.presentToast('Log out successful.');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortalAdminPage');
  }

}
