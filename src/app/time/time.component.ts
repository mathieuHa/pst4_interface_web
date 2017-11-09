import {Component, Input, NgModule, OnInit, ViewEncapsulation} from '@angular/core';
import {Times} from '../Classes/Times';
import {MatProgressBar, MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimeComponent implements OnInit {
  @Input()
  time: Times;
  constructor() { }

  ngOnInit() {
    console.log('Time Works');
  }

}
