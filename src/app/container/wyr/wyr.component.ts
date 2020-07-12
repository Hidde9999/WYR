import {Component, Input, OnInit} from '@angular/core';
import {WyrObject} from '../../WyrObject';
import {WyrService} from '../../wyr.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-wyr',
  templateUrl: './wyr.component.html',
  styleUrls: ['./wyr.component.scss']
})
export class WyrComponent implements OnInit {
  // vars
  OptionClicked = 0;
  OptionOneAmount = 0;
  OptionTwoAmount = 0;
  OptionAmount = 0;
  OptionOneProcent = 0;
  OptionTwoProcent = 0;

  // wyr: WyrObject = {
  //   question: 'Een hele mooie vraag ...',
  //   keuze1: 'Antwoord 1',
  //   keuze2: 'Antwoord 2',
  //   keuze1aantal: 2,
  //   keuze2aantal: 3,
  //   totaal: 5
  // };

  wyrObjects: WyrObject[];
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
    this.wyrService.getWyr(code).subscribe(wyrObjects => {
      this.wyrObjects = wyrObjects;
      for (const obj of wyrObjects){
        this.OptionOneAmount = obj.keuze1aantal;
        this.OptionTwoAmount = obj.keuze2aantal;
        this.OptionAmount = obj.totaal;
      }

    }, error => {
      this.errorTextInComponent = error;
    });
  }


  iscliked(op) {
    this.OptionAmount++;
    this.OptionClicked = op;
    if (this.OptionClicked === 1){
      this.OptionOneAmount++;
      // console.log(this.OptionOneAmount);
    } else if (this.OptionClicked === 2){
      this.OptionTwoAmount++;
      // console.log(this.OptionTwoAmount);
    }
    this.OptionOneProcent = 100 / this.OptionAmount * this.OptionOneAmount;
    this.OptionTwoProcent = 100 / this.OptionAmount * this.OptionTwoAmount;

  }

  next(){
    this.OptionClicked = 0;
    this.checkAuthCode('11111');
  }
}
