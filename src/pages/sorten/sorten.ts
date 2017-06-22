import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-sorten',
  templateUrl: 'sorten.html'
})
export class SortenPage {

  dataSorten: any;

  constructor(public navCtrl: NavController, public http: Http) {


    this.http
        .get('http://www.thesmoke.de/api/rest.php/sorten')
        .map(res => res.json())
        .subscribe(result => {this.dataSorten=result;});

  }
}