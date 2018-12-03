import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestPickupPage } from './request-pickup';

@NgModule({
  declarations: [
    RequestPickupPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestPickupPage),
  ],
})
export class RequestPickupPageModule {}
