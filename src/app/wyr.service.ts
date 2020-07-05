import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe, Subject, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {WyrObject} from './WyrObject';

@Injectable({
  providedIn: 'root'
})

export class WyrService {
  constructor(private httpClient: HttpClient) {
  }

  saveWyr(authorizationToken: string, wyrObject: WyrObject): Observable<void> {
    return this.httpClient.post<any>(`https://etihv.nl/api/wyr/api.php`, wyrObject, {
      headers: {
        Authorization: authorizationToken,
      }
    });
  }

  getWyr(authorizationToken: string): Observable<WyrObject[]> {
    return this.httpClient.get<WyrObject[]>(`https://etihv.nl/api/wyr/api.php`, {
      headers: {
        Authorization: authorizationToken,
      }
    });
  }
}

