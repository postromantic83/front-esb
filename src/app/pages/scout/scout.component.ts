import {Component, OnInit} from '@angular/core';
import {Unit} from '../../model/unit.model';
import {FlatResult} from '../../model/flat-result.model';
import {FuelStatistic} from '../../model/fuelstatistic.model';
import {ScoutService} from '../../services/scout.service';
import {OdoStatistic} from '../../model/odo_statistic.model';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.css']
})
export class ScoutComponent implements OnInit{
  title = 'front';
  public units: Unit[];
  public fuelFlatResult: FlatResult;
  public odoFlatResult: FlatResult;
  public fuelStatistic: FuelStatistic[];
  public odoStatistic: OdoStatistic[];
  selectedUnit: Unit;
  public ids: number[];
  public  daylychecked: boolean;
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
    this.scoutService.getFuel(this.selectedUnit, this.startDate, this.endDate, this.daylychecked).subscribe(
      (fuelStatistic: FuelStatistic) => {
        // const data = response.json();
        // this.responseResult = response.json();
        // response.forEach(function(value) {
        this.fuelStatistic = [fuelStatistic];
        if (fuelStatistic) {
          this.fuelFlatResult = new FlatResult();
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
    this.scoutService.getOdometer(this.selectedUnit, this.startDate, this.endDate, this.daylychecked).subscribe(
      (odoStatistic: OdoStatistic) => {
        this.odoStatistic = [odoStatistic];
        if (odoStatistic) {
          this.odoFlatResult = new FlatResult();
          this.odoFlatResult.unitId = odoStatistic.unitId;
          this.odoFlatResult.startDate = odoStatistic.intervals[0].begin;
          this.odoFlatResult.endDate = odoStatistic.intervals[0].end;
          this.odoFlatResult.startValue = odoStatistic.intervals[0].beginMileageKm.value;
          this.odoFlatResult.endValue = odoStatistic.intervals[0].endMileageKm.value;
        }
      },
      error => console.log(error)
    );
  }
}
