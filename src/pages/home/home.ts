import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PortalAdminPage } from '../portal-admin/portal-admin';
import { PortalDriverPage } from '../portal-driver/portal-driver';
import { PortalUserPage } from '../portal-user/portal-user';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { User, UserTypes } from '../../interfaces/User';
import { Driver } from '../../interfaces/Driver';
import { Rider } from '../../interfaces/Rider';
import { AppProvider } from '../../providers/AppProvider';
import { Events } from 'ionic-angular/util/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  private user:User;
  private driver:Driver;
  private rider:Rider;

  constructor(public navCtrl: NavController, public toastCtrl:ToastController, private appProvider: AppProvider, private events: Events) {
    this.events.subscribe('toadminpage', (data) => {
      this.navCtrl.setRoot(PortalAdminPage);
    });
    this.events.subscribe('todriverpage', (data) => {
      this.navCtrl.setRoot(PortalDriverPage);
    });
    this.events.subscribe('toriderpage', (data) => {
      this.navCtrl.setRoot(PortalUserPage);
    });
    this.user = {
      username:'',
      password:'',
      userType:UserTypes.Driver
    };
    this.driver = {
      userId:'',
      firstName:'',
      lastName:'',
      licensePlate:'',
      vehicleType:''
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

  goToSlide(num: number) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(num, 200);
    this.slides.lockSwipes(true);
  }

  formAdmin() {
    this.goToSlide(2);
  }
  
  formDriver() {
    this.goToSlide(3);
  }

  formUser() {
    this.goToSlide(4);
  }

  signup() {
    this.goToSlide(1);
  }

  login() {
    this.appProvider.signIn(this.user);
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

}
