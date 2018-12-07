import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Unit} from '../../model/unit.model';
import {UnitPick} from '../../model/unit-pick.model';

@Component({
  selector: 'app-unit-picker',
  templateUrl: './unit-picker.component.html',
  styleUrls: ['./unit-picker.component.css']
})
export class UnitPickerComponent implements OnInit {
  units: Unit[];
  statusSelect: UnitPick;
  // constructor (private scoutService: ScoutService) { }
  constructor () {
    this.statusSelect = new UnitPick();
    this.units  = [{id: 51005}, {id: 51006}, {id: 51007}, {id: 51008}, {id: 51010}, {id: 51011}, {id: 51164}];
  }
  @Output()
  selChanged: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }
  selectorUnitChanged() {
    console.log('ВЖУХ!');
    this.selChanged.emit(this.statusSelect);
  }
}

