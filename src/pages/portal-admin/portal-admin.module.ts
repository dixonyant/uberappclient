import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortalAdminPage } from './portal-admin';

@NgModule({
  declarations: [
    PortalAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PortalAdminPage),
  ],
})
export class PortalAdminPageModule {}
