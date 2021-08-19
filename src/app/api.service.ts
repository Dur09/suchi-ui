import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ICandidate } from './shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private SERVER_URL = "http://192.168.31.223:8080/api/v1/candidate/Cs2WAmD21yxngbxT";
  private SERVER_URL = "http://192.168.31.223:8080/api/v1/candidate/Cs2WAmD21yxngbxT";

  constructor(private httpClient: HttpClient) { }

  /*public get(): Observable<ICandidate[]> {
      return this.httpClient.get(this.SERVER_URL)
          .map({ this.body } => body)
          .catch(this.handleError);
  }*/

  public get(): Observable<ICandidate[]> {
      return this.httpClient.get<ICandidate[]>(this.SERVER_URL);
  }

  handleError(error: any) {
      return Observable.throw(error.json().error || 'Server error');
  }
}
