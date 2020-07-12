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
  
  // wyrObjects: WyrObject[];
  // errorTextInComponent = '';

  ngOnInit() {
    // this.checkAuthCode('11111');
  }

  // checkAuthCode(code) {
  //     code = '11111';
  //
  //     //SAVE OBJECT
  //     // this.wyrService.saveWyr(code, this.wyr).subscribe(() => {
  //     //   // this.customer.name = null;
  //     // });
  //
  //     //GET OBJECTS
  //     this.wyrService.getWyr(code).subscribe(wyrObjects => {
  //       this.wyrObjects = wyrObjects;
  //       }, error => {
  //         this.errorTextInComponent = error;
  //       })
  // }
  
}
