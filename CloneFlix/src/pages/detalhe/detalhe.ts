import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detalhe',
	templateUrl: 'detalhe.html',
})
export class DetalhePage {

	video: { nome: string, ano: number, classificaoEtaria: number, filme: boolean, duracao: string, numeroTemporadas: number, qualidade: string, resumo: string } = { nome: "Stranger Things", ano: 2016, classificaoEtaria: 16, filme: false, duracao: "", numeroTemporadas: 2, qualidade: 'hd', resumo: "quando um garoto desaparece." };

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetalhePage');
	}

}
