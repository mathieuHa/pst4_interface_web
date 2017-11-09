import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Report} from '../Classes/Report';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit {
  @Input()
  report: Report;
  constructor() { }

  ngOnInit() {
    console.log('it works');
  }

}
