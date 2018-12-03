import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPortalPage } from './signup-portal';

@NgModule({
  declarations: [
    SignupPortalPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPortalPage),
  ],
})
export class SignupPortalPageModule {}
