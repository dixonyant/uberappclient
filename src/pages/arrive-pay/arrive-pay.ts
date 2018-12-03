import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortalUserPage } from '../portal-user/portal-user';

/**
 * Generated class for the ArrivePayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arrive-pay',
  templateUrl: 'arrive-pay.html',
})
export class ArrivePayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  done() {
    this.navCtrl.setRoot(PortalUserPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrivePayPage');
  }

}
