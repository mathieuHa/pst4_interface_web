import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Stats} from '../Classes/Stats';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatComponent implements OnInit {
  @Input()
  stats: Stats;
  constructor() { }

  ngOnInit() {
  }

}
