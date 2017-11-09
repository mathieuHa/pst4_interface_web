import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Equipments} from '../Classes/Equipments';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EquipmentComponent implements OnInit {
  @Input()
  equipments: Equipments[];
  constructor() { }

  ngOnInit() {
  }

}
