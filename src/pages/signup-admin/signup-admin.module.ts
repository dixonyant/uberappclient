import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupAdminPage } from './signup-admin';

@NgModule({
  declarations: [
    SignupAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupAdminPage),
  ],
})
export class SignupAdminPageModule {}
