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

	temporadaEscolhida: string;

	video: { nome: string, ano: number, classificaoEtaria: number, ehFilme: boolean, duracao: string, temporadas: string, qualidade: string, resumo: string, elenco: Array<string>, criacao: Array<string>, jaEstaClassificado: boolean, classificaoBoa: boolean, estahMinhaLista: boolean, nomeTemporadas: Array<string> } = { nome: "Stranger Things", ano: 2016, classificaoEtaria: 16, ehFilme: false, duracao: "", temporadas: "2 temporadas", qualidade: 'hd', resumo: "No caminho de volta para casa, Will é aterrorizado por alguma coisa. Não longe dali, um laboratório secreto guarda um segredo sinistro.", elenco: ["Winona Ryder", "David Harbour"], criacao: ["The Duffer Brothers"], jaEstaClassificado: true, classificaoBoa: false, estahMinhaLista: false, nomeTemporadas: ["Temporada 1", "Temporada 2", "Temporada 3"] };

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetalhePage');
	}

}
