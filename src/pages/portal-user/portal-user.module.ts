import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortalUserPage } from './portal-user';

@NgModule({
  declarations: [
    PortalUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PortalUserPage),
  ],
})
export class PortalUserPageModule {}
