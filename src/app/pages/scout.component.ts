import {Component, OnInit} from '@angular/core';
import {Unit} from '../model/unit.model';
import {FuelFlatResult} from '../model/fuel-flat-result.model';
import {FuelStatistic} from '../model/fuelstatistic.model';
import {ScoutService} from '../services/scout.service';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.css']
})
export class ScoutComponent implements OnInit{
  title = 'front';
  public units: Unit[];
  public fuelFlatResult: FuelFlatResult;
  public fuelStatistic: FuelStatistic[];
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
    this.scoutService.test(this.selectedUnit, this.startDate, this.endDate).subscribe(
      (fuelStatistic: FuelStatistic) => {
        // const data = response.json();
        // this.responseResult = response.json();
        // response.forEach(function(value) {
        this.fuelStatistic = [fuelStatistic];
        if (fuelStatistic) {
          console.log('UnitId: ' + fuelStatistic.unitId);
          console.log('UnitId: ' + fuelStatistic.unitId);
          console.log('Begin: ' + fuelStatistic.intervals[0].begin);
          this.fuelFlatResult = new FuelFlatResult();
          this.fuelFlatResult.unitId = fuelStatistic.unitId;
          this.fuelFlatResult.startDate = fuelStatistic.intervals[0].begin;
          this.fuelFlatResult.endDate = fuelStatistic.intervals[0].end;
          this.fuelFlatResult.startValue = fuelStatistic.intervals[0].beginFuel.value;
          this.fuelFlatResult.endValue = fuelStatistic.intervals[0].endFuel.value;
        }
        // });
      },
      error => console.log(error)
    );
  }
  odometer() {
    console.log('Статистика по одометру');
  }
}