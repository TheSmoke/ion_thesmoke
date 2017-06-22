import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-geschmack',
  templateUrl: 'geschmack.html'
})
export class GeschmackPage {

  dataGeschmack: any;

  constructor(public navCtrl: NavController, public http: Http) {


    this.http
        .get('https://www.thesmoke.de/api/rest.php/geschmack')
        .map(res => res.json())
        .subscribe(result => {this.dataGeschmack=result;});

  }
}