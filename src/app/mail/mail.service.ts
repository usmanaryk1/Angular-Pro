import { Injectable } from '@angular/core';

import { Mail } from './models/mail.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MailService {

  private api = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getFolder(folder: string): Observable<any> {
    // Add safe, URL encoded search parameter if there is a search term
    // const options = folder ?{ params: new HttpParams().set('folder', folder) } : {};

    return this.http
      .get(`${this.api}/messages?folder=${folder}`)//pass a query to get property folder (inbox or trash) data // folder=${folder} => folder=${inbox} or folder=${trash}
      // .get(this.api+'/messages'+ options)
      .pipe(tap(response => console.log("resolver service", response)),
      catchError((error: any) => throwError(error.json()))
      );
  }
}