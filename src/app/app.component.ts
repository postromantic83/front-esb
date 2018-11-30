import {Component, OnInit} from '@angular/core';
import {ScoutService} from './scout.service';
import {Unit} from './model/unit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  public units: Unit[];
  selectedUnit: Unit;
  startDate: Date;
  endDate: Date;
  // constructor (private scoutService: ScoutService) { }
  constructor () {
    this.units  = [{id: 51005}, {id: 51006}];
  }
  ngOnInit(): void {
    console.log('Initialization');
    // this.scoutService.getUnits().subscribe((data: Unit[] => this.units = );
  }
  handleClick() {
    console.log('БУТОНЕД!');
  }
}
