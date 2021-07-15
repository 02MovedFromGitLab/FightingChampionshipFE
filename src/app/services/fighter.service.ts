import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Fighter} from '../models/fighter.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FighterService {
  private getUrl = 'http://localhost:8080/api/v1/fighter/all';

  constructor(private httpClient: HttpClient) { }

  public getFighters(): Observable<Fighter[]> {
    return this.httpClient.get<Fighter[]>(this.getUrl).pipe(
     map(response => response));
  }

}
