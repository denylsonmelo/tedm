import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { PerfisPage } from '../pages/perfis/perfis';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    PerfisPage,
	HomePage
],
imports: [
	BrowserModule,
    IonicModule.forRoot(MyApp)
],
bootstrap: [IonicApp],
entryComponents: [
	MyApp,
	PerfisPage,
	HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
