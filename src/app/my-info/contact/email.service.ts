import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { EmailRequest } from 'src/app/models/email-request';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  send(emailRequest: EmailRequest): Observable<string>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post('https://us-central1-nodejs-api-cv.cloudfunctions.net/webApi/email', emailRequest, { headers: headers, responseType: 'text'})
    .pipe(
      catchError(err => {
        return of(null);
      })
    );
  }
}
