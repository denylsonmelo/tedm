import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	alunos: Array<{
		nome: string,
		matricula: string,
		curso: string
	}>;

	usuario: string;
	senha: string;

	constructor(public navCtrl: NavController) {

	}

	logar() {

		console.log("usuario: " + this.usuario);

		this.navCtrl.push(FeedPage, {
			username: this.usuario,
			matricula: this.senha
		});
	}
}
