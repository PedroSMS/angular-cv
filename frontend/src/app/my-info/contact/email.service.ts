import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

    return this.http.post<any>('http://localhost:5000/api/email', emailRequest, { headers: headers} ).pipe();
  }
}
