import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatabaseApi } from '../api/DatabaseApi';
import { AppProvider } from '../providers/AppProvider';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPortalPage } from '../pages/signup-portal/signup-portal';
import { SignupAdminPage } from '../pages/signup-admin/signup-admin';
import { SignupDriverPage } from '../pages/signup-driver/signup-driver';
import { SignupUserPage } from '../pages/signup-user/signup-user';
import { PortalAdminPageModule } from '../pages/portal-admin/portal-admin.module';
import { PortalDriverPageModule } from '../pages/portal-driver/portal-driver.module';
import { PortalUserPageModule } from '../pages/portal-user/portal-user.module';
import { ApprovePickupPageModule } from '../pages/approve-pickup/approve-pickup.module';
import { ArrivePayPageModule } from '../pages/arrive-pay/arrive-pay.module';
import { AwaitPickupPageModule } from '../pages/await-pickup/await-pickup.module';
import { RequestPickupPageModule } from '../pages/request-pickup/request-pickup.module';
import { SelectPickupPageModule } from '../pages/select-pickup/select-pickup.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPortalPage,
    SignupAdminPage,
    SignupDriverPage,
    SignupUserPage
  ],
  imports: [
    BrowserModule,
    ApprovePickupPageModule,
    ArrivePayPageModule,
    AwaitPickupPageModule,
    PortalAdminPageModule,
    PortalDriverPageModule,
    PortalUserPageModule,
    RequestPickupPageModule,
    SelectPickupPageModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatabaseApi,
    AppProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
