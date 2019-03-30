import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddmoneyPage } from '../addmoney/addmoney';
import { TransferPage } from '../transfer/transfer';
import { WithdrawalPage } from '../withdrawal/withdrawal';
import { AdvancePage } from '../advance/advance';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addmoney() {
	this.navCtrl.push("AddmoneyPage");
  }
  transfer() {
	this.navCtrl.push("TransferPage");
  }
  withdrawal() {
	this.navCtrl.push("WithdrawalPage");
  }
  advance() {
	this.navCtrl.push("AdvancePage");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
}
