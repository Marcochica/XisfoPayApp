import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
	IonicPageModule.forChild(DashboardPage),
	IonicModule.forRoot(DashboardPage, { tabsPlacement: 'bottom' })
  ],
})
export class DashboardPageModule {}
