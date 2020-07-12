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
      }, responseType: "json"
    }).pipe(
      retry(0),
      catchError(this.handleError)
    );
  }
  
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log("error = " + errorMessage);
    return throwError(errorMessage);
  }
}

