import {Component, Input, OnInit} from '@angular/core';
import {WyrObject} from "../WyrObject";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() wyrObjs: WyrObject[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
