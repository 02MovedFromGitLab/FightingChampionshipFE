import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fighter} from '../models/fighter.model';
import {map} from 'rxjs/operators';
import {FightRecord} from '../models/fight-record.model';

@Injectable({
  providedIn: 'root'
})
export class FighterService {
  private getUrl = 'http://localhost:8080/api/v1/fighter';

  constructor(private httpClient: HttpClient) { }

  getFighters(): Observable<Fighter[]> {
    return this.httpClient.get<Fighter[]>(this.getUrl + '/all').pipe(
     map(response => response));
  }

  getFighter(id: number): Observable<Fighter> {
    return this.httpClient.get<Fighter>(this.getUrl + `/${id}`).pipe(
      map(response => response));
  }

  getFighterRecord(id: number): Observable<FightRecord> {
    return this.httpClient.get<FightRecord>(this.getUrl + `/record/${id}`).pipe(
      map(response => response));
  }

  saveFighter(fighter: Fighter): Observable<Fighter> {
    return this.httpClient.post<Fighter>(this.getUrl + '/new', fighter);
  }

}
