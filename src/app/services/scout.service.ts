import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Unit} from '../model/unit.model';
import {FuelStatistic} from '../model/fuelstatistic.model';
import {OdoStatistic} from '../model/odo_statistic.model';
@Injectable()
export class ScoutService {
  constructor(private http: HttpClient) { }
  private scoutIdsURL = 'http://localhost:8090/scout/api/units/availableIds';
  private scoutFuelURL = 'http://localhost:8090/scout/statistics/fuel?';
  public getUnits (): Observable<number[]> {
    return this.http.get<number[]>(this.scoutIdsURL);
  }
  public getFuel(unit: Unit, startDate: Date, endDate: Date, dayly: boolean): Observable<FuelStatistic> {
    // console.log('Date To String:' + startDate.getFullYear() + '/' + startDate.getMonth() + '/' + startDate.getDate() + ' 00:00:00');
    console.log('Date To String:' + startDate.getFullYear() + '%2F' + startDate.getMonth() + '%2F' + startDate.getDate() + ' 00:00:00');
    return this.http.get<FuelStatistic>(this.scoutFuelURL +
      this.requestHelper(unit, startDate, endDate, dayly));
  }
  public getOdometer(unit: Unit, startDate: Date, endDate: Date, dayly: boolean): Observable<OdoStatistic> {
    console.log('Date To String:' + startDate.getFullYear() + '/' + startDate.getMonth() + '/' + startDate.getDate() + ' 00:00:00');
    return this.http.get<OdoStatistic>(this.scoutFuelURL +
      this.requestHelper(unit, startDate, endDate, dayly));
  }
  private requestHelper(unit: Unit, startDate: Date, endDate: Date, dayly: boolean): string {
    let pathstring = 'request.unitId=' + unit.id + '&request.beginDateTime=' + startDate.getFullYear() + '%2F' + startDate.getMonth()
      + '%2F' + startDate.getDate() + ' 00:00:00' + '&request.endDateTime=' + endDate.getFullYear()
      + '%2F' + endDate.getMonth() + '%2F' + endDate.getDate() + ' 00:00:00';
    if (dayly) {
      pathstring = pathstring + '&request.interval=day';
    }
    return pathstring;
  }
}
