import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AwaitPickupPage } from '../await-pickup/await-pickup';
import { Request, Status } from '../../interfaces/Request';
import { AppProvider } from '../../providers/AppProvider';

/**
 * Generated class for the RequestPickupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-pickup',
  templateUrl: 'request-pickup.html',
})
export class RequestPickupPage {

  private request:Request

  constructor(public navCtrl: NavController, public navParams: NavParams, private appProvider: AppProvider) {
    this.request = {
      eta:'',
      pickup:'',
      destination:'',
      riderUID:'',
      driverUID:'',
      time:'',
      status: Status.Requested
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPickupPage');
  }

  requestRide() {
    this.request.riderUID = this.appProvider.getRider()._id;
    this.appProvider.requestRide(this.request, () => {
      this.navCtrl.push(AwaitPickupPage);
    });
  }

  back() {
    this.navCtrl.pop();
  }

}
