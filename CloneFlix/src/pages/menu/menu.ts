import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DetalhePage } from '../detalhe/detalhe';

@IonicPage()
@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage {

	rootPage: any = DetalhePage;

	pages: Array<{title: string, component: any}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'List', component: DetalhePage }
		  ];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MenuPage');
	}

}
