import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-perfis',
	templateUrl: 'perfis.html',
})
export class PerfisPage {

	perfis: Array<{ nome: string, imagem: string }> = [
		{ nome: "Mailson", imagem: "https://avatars.io/twitter/mailson_assis" },
		{ nome: "Denylson", imagem: "https://avatars.io/twitter/denylsonmelo" },
		{ nome: "Thalia", imagem: "https://avatars.io/instagram/_lia.silva" },
		{ nome: "Renan", imagem: "https://avatars.io/twitter/_renanfialho_" }
	];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	clicarNoCard(){
		console.log("card clicado");
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PerfisPage');
	}

}
