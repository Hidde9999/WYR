import {Component, NgModule, OnInit} from '@angular/core';
import {WyrService} from './wyr.service';
import {WyrObject} from './WyrObject';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wyr: WyrObject = {
    id: 1,
    question: 'In an unlucky survival situation, would you rather...',
    keuze1: 'Go swimming with sharks',
    keuze2: 'Go swimming with alligators',
    keuze1aantal: 0,
    keuze2aantal: 0,
    totaal: 0
  };

  constructor(
    private wyrService: WyrService) {
    }

  ngOnInit() {
    this.checkAuthCode('11111');
  }

    checkAuthCode(code) {
      code = '11111';
      this.wyrService.getWyr(code).subscribe(wyrObject => {
        this.wyr = wyrObject;
        console.log(this.wyr);
      }, error => {
        console.log(this.wyr);
      });
  }
}
