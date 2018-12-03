import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupUserPage } from './signup-user';

@NgModule({
  declarations: [
    SignupUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupUserPage),
  ],
})
export class SignupUserPageModule {}
