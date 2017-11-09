import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './report/report.component';
import { TimeComponent } from './time/time.component';
import { StatComponent } from './stat/stat.component';
import { NetworkComponent } from './network/network.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { VulnerabilityComponent } from './vulnerability/vulnerability.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule, MatProgressSpinnerModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    TimeComponent,
    StatComponent,
    NetworkComponent,
    EquipmentComponent,
    VulnerabilityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgbModule.forRoot()
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
