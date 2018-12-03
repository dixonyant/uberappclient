import { Injectable } from '@angular/core';
import { AlertController } from'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { User, UserTypes } from '../interfaces/User';
import { DatabaseApi } from '../api/DatabaseApi';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Driver } from '../interfaces/Driver';
import { Rider } from '../interfaces/Rider';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Events } from 'ionic-angular/util/events';
import { Request } from '../interfaces/Request';

@Injectable()

export class AppProvider {

  private user:User;
  private driver:Driver;
  private rider:Rider;
  private request:Request;
  private requestList:Request[];

  constructor(private databaseApi: DatabaseApi, private toastCtrl:ToastController, private events:Events) {

  }

  getUser() {
    return this.user;
  }

  getDriver() {
    return this.driver;
  }

  getRider() {
    return this.rider;
  }

  getRequest() {
    return this.request;
  }

  signUpAdmin(user:User) {
    this.databaseApi.PostUser(user).subscribe((data) => {
      if (data) {
        this.user = data;
        this.presentToast('SignUp Successful.');
      }
    }, (err) => {
      if (err) {
        this.presentToast('SignUp Unsuccessful.');
      }
    });
  }

  signUpDriver(user:User, driver:Driver) {
    this.databaseApi.PostUser(user).subscribe((data) => {
      if (data) {
        this.user = data;
        driver.userId = this.user._id;
        this.databaseApi.PostDriver(driver).subscribe((data) => {
          this.driver = data;
          this.presentToast('SignUp Successful.');
        });
      }
    }, (err) => {
      if (err) {
        this.presentToast('SignUp Unsuccessful.');
      }
    });
  }

  signUpRider(user:User, rider:Rider) {
    this.databaseApi.PostUser(user).subscribe((data) => {
      if (data) {
        this.user = data;
        rider.userId = this.user._id;
        this.databaseApi.PostRider(rider).subscribe((data) => {
          this.rider = data;
          this.presentToast('SignUp Successful.');
        });
      }
    }, (err) => {
      if (err) {
        this.presentToast('SignUp Unsuccessful.');
      }
    });
  }

  signIn(user:User) {
    this.databaseApi.GetUserByUser(user).subscribe((data) => {
      this.user = data[0];
      if (!this.user) {
        this.presentToast('User not found, Please try again.');
        return;
      }
      if(this.user.userType === UserTypes.Driver) {
        this.databaseApi.GetDriver(this.user._id).subscribe((data) => {
          this.driver = data[0];
          this.events.publish('todriverpage');
        })
      } else if(this.user.userType === UserTypes.Rider) {
        this.databaseApi.GetRider(this.user._id).subscribe((data) => {
          this.rider = data[0];
          this.events.publish('toriderpage');
        });
      }
      else {
        this.events.publish('toadminpage');
      }
      this.presentToast('Sign in successful.');
    });
  }

  signOut() {
    this.user = undefined;
    this.driver = undefined;
    this.rider = undefined;
  }

  requestRide(request:Request, cb) {
    this.databaseApi.PostRequest(request).subscribe((data) => {
      this.request = data;
      cb();
    });
  }

  updateRide(request:Request) {
    this.databaseApi.PutRequest(request).subscribe((data) => {
      this.request = data;
    });
  }

  getRideStatus(id:string) {
    return this.databaseApi.GetRequest(id);
  }

  getRequestList() {
    return this.databaseApi.GetRequestList();
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      cssClass: 'toast'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


}