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

	temporadaEscolhida: { nome: string, episodios: Array<string> } = {
		nome: "Temporada com nome grande grande grande",
		episodios: [
			"Episodio 1 temporada 1",
			"Episodio 2 temporada 1",
			"Episodio 3 temporada 1",
		]
	};

	video: {
		nome: string,
		ano: number,
		classificaoEtaria: number,
		ehFilme: boolean,
		duracao: string,
		qtdTemporadas: string,
		qualidade: string,
		resumo: string,
		elenco: Array<string>,
		criacao: Array<string>,
		jaEstaClassificado: boolean,
		classificaoBoa: boolean,
		estahMinhaLista: boolean,
		temporadas: Array<{ nome: string, episodios: Array<string> }>
	} = {
			nome: "Stranger Things",
			ano: 2016,
			classificaoEtaria: 16,
			ehFilme: false,
			duracao: "",
			qtdTemporadas: "2 temporadas",
			qualidade: 'hd',
			resumo: "No caminho de volta para casa, Will é aterrorizado por alguma coisa. Não longe dali, um laboratório secreto guarda um segredo sinistro.",
			elenco: ["Winona Ryder", "David Harbour"],
			criacao: ["The Duffer Brothers"],
			jaEstaClassificado: true,
			classificaoBoa: false,
			estahMinhaLista: false,
			temporadas: [
				{
					nome: "Temporada com nome grande grande grande",
					episodios: [
						"Episodio 1 temporada 1",
						"Episodio 2 temporada 1",
						"Episodio 3 temporada 1",
					]
				},
				{
					nome: "Temporada 2",
					episodios: [
						"Episodio 1 temporada 2",
						"Episodio 2 temporada 2",
						"Episodio 3 temporada 2",
					]
				},
				{
					nome: "Temporada 3",
					episodios: [
						"Episodio 1 temporada 3",
						"Episodio 2 temporada 3",
						"Episodio 3 temporada 3",
					]
				},
			]
		};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	selecionarEpisodio() {
		console.log('episodio');
	}

}
