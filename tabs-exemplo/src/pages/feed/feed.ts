import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
})
export class FeedPage {

	nome: string;
	matricula: string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		this.nome = this.navParams.get('username');
		this.matricula = this.navParams.get('matricula');
	}

}
