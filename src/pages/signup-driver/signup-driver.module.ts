import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupDriverPage } from './signup-driver';

@NgModule({
  declarations: [
    SignupDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupDriverPage),
  ],
})
export class SignupDriverPageModule {}
