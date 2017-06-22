import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-marken',
  templateUrl: 'marken.html'
})
export class MarkenPage {

  dataMarken: any;

  constructor(public navCtrl: NavController, public http: Http) {


    this.http
        .get('http://www.thesmoke.de/api/dbapi.php')
        .map(res => res.json())
        .subscribe(result => {this.dataMarken=result.data;});

  }
}