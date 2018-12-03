import {Component, OnInit} from '@angular/core';
import {ScoutService} from './scout.service';
import {Unit} from './model/unit.model';
import {forEach} from '@angular/router/src/utils/collection';
import {FuelStatistic} from './model/FuelStatistic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  public units: Unit[];
  public responseResult: string;
  public fuelStatistic: FuelStatistic;
  selectedUnit: Unit;
  public ids: number[];
  startDate: Date;
  endDate: Date;
  // constructor (private scoutService: ScoutService) { }
  constructor (private scoutService: ScoutService) {
    this.units  = [{id: 51005}, {id: 51006}, {id: 51007}, {id: 51008}, {id: 51010}, {id: 51011}, {id: 51164}];
  }
  ngOnInit(): void {
    console.log('Initialization');
  }
  handleClick() {
    console.log('БУТОНЕД!');
    // let unitList: Unit[];
    // let arrayUnits: ConcatArray<Unit>;
    this.scoutService.getUnits().subscribe(
      (response: number[]) => {
        response.forEach(function(value) {
          let currentUnit: Unit;
          currentUnit = new Unit(value);
          // arrayUnits.(currentUnit);
          console.log('Pushed: ' + value);
          // console.log('Pushed: ' + this.units);
        });
        },
          error => console.log(error)
    );
  }
  fuel() {
    console.log('Получение топлива');
    this.scoutService.getFuel(this.selectedUnit, this.startDate, this.endDate).subscribe(
      (response: FuelStatistic) => {
          // const data = response.json();
          // this.responseResult = response.json();
        // response.forEach(function(value) {
          console.log('responseResult: ' + response.unitId);
          console.log('FuelResult: ' + response.intervals);
          this.fuelStatistic = response;
          // console.log('Response: ' + data);
        // });
      },
      error => console.log(error)
    );
  }
  odometer() {
    console.log('Статистика по одометру');
  }
}
