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

  getWyr(authorizationToken: string): Observable<WyrObject> {
    return this.httpClient.post<WyrObject>('http://localhost/api/wyr/api.php', {
      headers: {
        Authorization: authorizationToken,
      }
    }).pipe(
      retry(0),
    );
  }

}
