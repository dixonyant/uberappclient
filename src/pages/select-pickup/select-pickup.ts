import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Request, Status } from '../../interfaces/Request';
import { AppProvider } from '../../providers/AppProvider';

/**
 * Generated class for the SelectPickupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-pickup',
  templateUrl: 'select-pickup.html',
})
export class SelectPickupPage {

  private request:Request;
  private requestList:Request[] = [];
  private stage = 0;
  private interval;

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
      this.getRides();
    }, 1000)
  }

  getRides() {
    this.appProvider.getRequestList().subscribe((data) =>{
      this.requestList = data;
      if (this.requestList.length > 0) {
        this.stage = 1;
      }
    });
  }

  selectRide(req:Request) {
    clearInterval(this.interval);
    this.request = req;
    this.stage = 2;
  }

  updateRequest() {
    this.request.status = Status.InProgress;
    this.request.driverUID = this.appProvider.getDriver()._id;
    this.appProvider.updateRide(this.request);
    this.stage = 3;
  }

  arrived() {
    this.request.status = Status.Completed;
    this.appProvider.updateRide(this.request);
    this.stage = 0;
    this.interval = setInterval(() => {
      this.getRides();
    }, 1000)
  }

  back() {
    if (this.stage ===2) {
      this.stage = 1;
      this.interval = setInterval(() => {
        this.getRides();
      }, 1000)
    }
    else {
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPickupPage');
  }

}
