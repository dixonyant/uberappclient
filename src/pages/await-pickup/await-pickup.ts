import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ArrivePayPage } from '../arrive-pay/arrive-pay';
import { AppProvider } from '../../providers/AppProvider';
import { Status, Request } from '../../interfaces/Request';

/**
 * Generated class for the AwaitPickupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-await-pickup',
  templateUrl: 'await-pickup.html',
})
export class AwaitPickupPage {

  private request:Request;
  private interval;
  private requested = Status.Requested;
  private completed = Status.Completed;
  private inProgress = Status.InProgress;
  private approved:boolean;
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
    this.interval = setInterval(() => {
      this.getRideStatus();
    }, 1000)
  }

  getRideStatus() {
    this.request = this.appProvider.getRequest();
    this.appProvider.getRideStatus(this.request._id).subscribe((data) =>{
      this.request = data;
      if (this.request.status === Status.Completed) {
        clearInterval(this.interval);
      }
    });
  }

  pay() {
    this.navCtrl.push(ArrivePayPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwaitPickupPage');
  }

}
