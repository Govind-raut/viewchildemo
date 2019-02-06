import { Component, OnInit, ViewChild } from '@angular/core';

import { NumberComponent } from '../number/number.component'

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css']
})
export class NumberParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @ViewChild(NumberComponent)

  private numbercomponent: NumberComponent;

  increase()
  {
    this.numbercomponent.increaseByOne();
  }

  decrease()
  {
    this.numbercomponent.decreaseByOne();
  }
}
