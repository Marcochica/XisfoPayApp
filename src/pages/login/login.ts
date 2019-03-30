import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})

export class LoginPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private storage: Storage
	) {}

	dashboard(): void {
		this.storage.set('tutorial', true).then(() => {
			this.navCtrl.setRoot('DashboardPage');
		});
	}

}