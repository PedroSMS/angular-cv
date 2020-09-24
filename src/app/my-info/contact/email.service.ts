import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmailRequest } from 'src/app/models/email-request';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  send(emailRequest: EmailRequest): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>('https://us-central1-nodejs-api-cv.cloudfunctions.net/webApi/email', emailRequest, { headers: headers} ).pipe(
      catchError(err => {
        return of(null);
      })
    );
  }
}
