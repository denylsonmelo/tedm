import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';

import { PerfisPage } from '../pages/perfis/perfis';
import { HomePage } from '../pages/home/home';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { MenuPage } from '../pages/menu/menu';

@NgModule({
	declarations: [
		MyApp,
		PerfisPage,
		HomePage,
		DetalhePage,
		MenuPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		PerfisPage,
		HomePage,
		DetalhePage,
		MenuPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		ScreenOrientation,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
