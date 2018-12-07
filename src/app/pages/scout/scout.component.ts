import {Component, OnInit} from '@angular/core';
import {Unit} from '../../model/unit.model';
import {FuelStatistic} from '../../model/fuelstatistic.model';
import {ScoutService} from '../../services/scout.service';
import {OdoStatistic} from '../../model/odo_statistic.model';
import {UnitPick} from '../../model/unit-pick.model';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.css']
})
export class ScoutComponent implements OnInit {
  title = 'front';
  public units: Unit[];
  public fuelStatistic: FuelStatistic;
  public odoStatistic: OdoStatistic;
  selectedUnit: Unit;
  public ids: number[];
  public  daylyFuelChecked: boolean;
  public  daylyOdoChecked: boolean;
  startDate: Date;
  endDate: Date;
  unisel: UnitPick;
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
    this.scoutService.getFuel(this.selectedUnit, this.startDate, this.endDate, this.daylyFuelChecked).subscribe(
      (fuelStatistic: FuelStatistic) => {
        // const data = response.json();
        // this.responseResult = response.json();
        // response.forEach(function(value) {
        this.fuelStatistic = fuelStatistic;
        // });
      },
      error => {
        console.log('факеншит!');
        console.log(error);
      }
    );
  }
  odometer() {
    console.log('Статистика по одометру');
    this.scoutService.getOdometer(this.selectedUnit, this.startDate, this.endDate, this.daylyOdoChecked).subscribe(
      (odoStatistic: OdoStatistic) => {
        this.odoStatistic = odoStatistic;
      },
      error => console.log(error)
    );
  }
  handleFuelDaylyChange(e) {
    this.fuel();
  }
  handleOdoDaylyChange(e) {
    this.odometer();
  }
  selectorChanged(selector: UnitPick) {
    console.log('Готово!');
    this.startDate = selector.startDate;
    this.endDate = selector.endDate;
    this.selectedUnit = selector.selectedUnit;
  }
}
