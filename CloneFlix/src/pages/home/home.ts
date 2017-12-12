import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {


	continuarAssitindo: Array<{ nome: string, videos: Array<{ nome:string, url: string }> }> = [
		{
			nome: "Continuar assistindo", videos: [
				{ nome: "Spartacus: S01E01", url: "http://www.mkvtvseries.com/tv_series/media/tvlarge-Spartacus_104.jpg" },
			]
		},
	];

	categorias: Array<{ nome: string, imagens: Array<{ url: string }> }> = [
		{
			nome: "Minha lista", imagens: [
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
			]
		},
		{
			nome: "Recentes", imagens: [
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
			]
		},
		{
			nome: "Por que você assistiu a Liga da Justiça", imagens: [
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
			]
		}
	];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

}