import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Network} from '../Classes/Network';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NetworkComponent implements OnInit {
  @Input()
  networks: Network[];
  constructor() { }

  ngOnInit() {
  }

}
