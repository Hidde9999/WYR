import {Component, Input, OnInit} from '@angular/core';
import {WyrObject} from "../../WyrObject";
import {WyrService} from "../../wyr.service";

@Component({
  selector: 'app-wyr',
  templateUrl: './wyr.component.html',
  styleUrls: ['./wyr.component.scss']
})
export class WyrComponent implements OnInit {
  // vars
  OptionClicked = 0;
  OptionOneAmount = 99;
  OptionTwoAmount = 99;
  OptionAmount = 198;
  OptionOneProcent = 0;
  OptionTwoProcent = 0;

  wyrObjStub: WyrObject = {
    id: 1,
    question: 'Een hele mooie vraag ...',
    keuze1: 'Antwoord 1',
    keuze2: 'Antwoord 2',
    keuze1aantal: 2,
    keuze2aantal: 3,
    totaal: 5
  };

  wyrObject: WyrObject = this.wyrObjStub;
  errorTextInComponent = '';

  constructor(
    private wyrService: WyrService) {
  }

  ngOnInit() {
    this.checkAuthCode('11111');
  }

  checkAuthCode(code) {
    code = '11111';

    // SAVE OBJECT
    // this.wyrService.saveWyr(code, this.wyr).subscribe(() => {
    // });

    // GET OBJECTS
    this.wyrService.getWyr(code).subscribe(wyrObject => {
 
      this.wyrObject = wyrObject;
      
      this.OptionOneAmount = this.wyrObject.keuze1aantal;
      this.OptionTwoAmount = this.wyrObject.keuze2aantal;
      this.OptionAmount = this.wyrObject.totaal;
    }, error => {
      this.errorTextInComponent = error;

      this.wyrObject = this.wyrObjStub;
      
      this.OptionOneAmount = this.wyrObject.keuze1aantal;
      this.OptionTwoAmount = this.wyrObject.keuze2aantal;
      this.OptionAmount = this.wyrObject.totaal;
    })
  }
  
  iscliked(op) {
    this.OptionAmount++;
    this.OptionClicked = op;
    if (this.OptionClicked === 1){
      this.OptionOneAmount++;
      console.log(this.OptionOneAmount);
    } else if(this.OptionClicked === 2){
      this.OptionTwoAmount++;
      console.log(this.OptionTwoAmount);
    }
    this.OptionOneProcent = 100 / this.OptionAmount * this.OptionOneAmount;
    this.OptionTwoProcent = 100 / this.OptionAmount * this.OptionTwoAmount;
    
    console.log(this.OptionClicked);
  }

  next(){
    this.OptionClicked = 0;
  }
}
