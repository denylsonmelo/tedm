import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	categorias: Array<{ nome: string }> = [
		{ nome: "Continuar assistindo" },
		{ nome: "Minha lista" },
		{ nome: "Recentes" },
		{ nome: "Por que você assistiu a Liga da Justiça" }];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

}
