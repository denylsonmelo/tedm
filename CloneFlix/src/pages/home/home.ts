import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { MovieDbProvider } from '../../providers/movie-db/movie-db';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {


	continuarAssitindo: Array<{ nome: string, videos: Array<{ nome: string, url: string }> }> = [
		{
			//http://www.mkvtvseries.com/tv_series/media/tvlarge-Spartacus_104.jpg
			nome: "Continuar assistindo", videos: [
				{ nome: "Spartacus: S01E01", url: "https://i.ytimg.com/vi/zBqDed1vpJY/maxresdefault.jpg" },
			]
		},
	];

	categorias: Array<{ nome: string, midias: Array<{ id: number, url: string }> }> = [
		{
			nome: "Por que você gosta de Alien", midias: [
				{ id: 1, url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ id: 1, url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ id: 1, url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
			]
		},
		/*{
			nome: "Por que você assistiu a Liga da Justiça", imagens: [
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
				{ url: "http://nefasto.com.br/wp-content/uploads/2017/01/Jogos-Mortais-3-terror-nefasto.jpg" },
			]
		}*/
	];

	constructor(public navCtrl: NavController, public navParams: NavParams, public mdb: MovieDbProvider) {

		console.log("aqui   " + this.mdb.procurarListaFilmes("Alien"));
		this.categorias[0].midias = this.mdb.procurarListaFilmes("Alien");
	}

	detalhe() {
		this.navCtrl.push(DetalhePage);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

}
