import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Unit} from './model/unit.model';
// @Injectable()
export class ScoutService {
  constructor(private http: HttpClient) { }
  private scoutURL = 'http://localhost:8090/scout/api/units/availableIds';
  public getUnits (): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.scoutURL);
  }
}
