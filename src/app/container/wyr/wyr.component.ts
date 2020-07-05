import {Component, Input, OnInit} from '@angular/core';
import {WyrObject} from "../../WyrObject";

@Component({
  selector: 'app-wyr',
  templateUrl: './wyr.component.html',
  styleUrls: ['./wyr.component.scss']
})
export class WyrComponent implements OnInit {
  // vars
  OptionClicked = 0;
  OptionOneAmount = 123;
  OptionTwoAmount = 234;
  OptionAmount = 357;

  OptionOneProcent = 0;
  OptionTwoProcent = 0;

  @Input() wyrObjs: WyrObject[];

  wyrQuestion: string = "niets";

  constructor() {}

  ngOnInit() {
    console.log("hier istie: " + this.wyrObjs)
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
