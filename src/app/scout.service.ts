import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Unit} from './model/unit.model';
import {FuelStatistic} from './model/FuelStatistic';
@Injectable()
export class ScoutService {
  constructor(private http: HttpClient) { }
  private scoutIdsURL = 'http://localhost:8090/scout/api/units/availableIds';
  private scoutFuelURL = 'http://localhost:8090/scout/statistics/fuel?';
  public getUnits (): Observable<number[]> {
    return this.http.get<number[]>(this.scoutIdsURL);
  }
  public getFuel(unit: Unit, startDate: Date, endDate: Date): Observable<FuelStatistic> {
    console.log('SelectedUnit: ' + unit.id);
    console.log('StartDate: ' + startDate);
    console.log('EndDate: ' + endDate);
    console.log('Date To String:' + startDate.getFullYear() + '/' + startDate.getMonth() + '/' + startDate.getDate() + ' 00:00:00');
    return this.http.get<FuelStatistic>(this.scoutFuelURL +
      'request.unitId=' + unit.id +
      '&request.beginDateTime=' + startDate.getFullYear() + '/' + startDate.getMonth() + '/' + startDate.getDate() + ' 00:00:00' +
      '&request.endDateTime=' + endDate.getFullYear() + '/' + endDate.getMonth() + '/' + endDate.getDate() + ' 01:01:00');
  }
}
