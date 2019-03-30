import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {

	rootPage: any = '';

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		private storage: Storage
	) {
		platform.ready().then(() => {
			this.storage.get('tutorial').then(visto => {
				if(visto) {
					this.rootPage = 'LoginPage';
				} else {
					this.rootPage = 'HomePage';
				}

				statusBar.styleDefault();
				splashScreen.hide();
			});
		});
	}

}