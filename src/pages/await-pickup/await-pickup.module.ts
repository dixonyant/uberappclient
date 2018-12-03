import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AwaitPickupPage } from './await-pickup';

@NgModule({
  declarations: [
    AwaitPickupPage,
  ],
  imports: [
    IonicPageModule.forChild(AwaitPickupPage),
  ],
})
export class AwaitPickupPageModule {}
