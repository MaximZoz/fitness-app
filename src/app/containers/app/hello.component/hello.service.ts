import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {
  idUpdate: string;
  noteUpdate: string;
  valueNoteLS = [];

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    const headers = {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    };
    return this.http.get(
      `https://ivanborisof.pythonanywhere.com/api/v1.0/events/`,
      { headers }
    );
  }

  update() {}
}
