import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Report} from './Classes/Report';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  report: Report;
  show = false;
  constructor(private http: HttpClient, ) {

  }

  ngOnInit(): void {
    this.http.get('./assets/report.json').subscribe(data => {
      this.report = data['report'];
      this.show = true;
      console.log(this.report);
      console.log(data);
    });
  }

}
