import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabakPage } from '../pages/tabak/tabak';      //neue Seiten importieren

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabakPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{menuType: 'overlay',}),  //Menütyp festlegen
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,                  //Seiten in Menü
    ListPage,
    TabakPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
