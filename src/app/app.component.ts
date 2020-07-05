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
    keuze1aantal: 100,
    keuze2aantal: 90,
    totaal: 190
  };
  
  wyrObjectsTerug: WyrObject[];
  errorTextInComponent = '';

  constructor(
    private wyrService: WyrService) {
    }

  ngOnInit() {
    this.checkAuthCode('11111');
    this.doedit();
  }

  checkAuthCode(code) {
      code = '11111';

      //SAVE OBJECT
      // this.wyrService.saveWyr(code, this.wyr).subscribe(() => {
      //   // this.customer.name = null;
      // });

      //GET OBJECTS
      this.wyrService.getWyr(code).subscribe(wyrObjects => {
        this.wyrObjectsTerug = wyrObjects;
        }, error => {
          this.errorTextInComponent = error;
        })
  }
  
  doedit() {
    console.log("terug : " + this.wyrObjectsTerug);
  }
  
}
