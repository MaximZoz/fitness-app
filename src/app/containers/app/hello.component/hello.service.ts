import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from './hello.component.component';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../alert/alert.component';

@Injectable({ providedIn: 'root' })
export class PostsService {
  idUpdate: string;
  noteUpdate: string;
  valueNoteLS = [];

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {}

  async getAll(): Promise<any> {
    const resp = await fetch(
      'https://ivanborisof.pythonanywhere.com/api/v1.0/events/'
    );
    const data = await resp.json();
    return data.response as News[];
  }

  async update(news: any) {
    const updateMethod = {
      method: 'PATCH',
      body: JSON.stringify({
        news,
      }),
    };
    try {
      const resp = await fetch(
        'https://ivanborisof.pythonanywhere.com/api/v1.0/events/' + news.id,
        updateMethod
      );
      const data = await resp.json();
      return data.response;
    } catch (e) {
      this.openSnackBarWarningUpdate();
    }
  }
  async create() {}
  async delete(id: string) {
    const deleteMethod = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const resp = await fetch(
        'https://ivanborisof.pythonanywhere.com/api/v1.0/events/' + id,
        deleteMethod
      );
      const data = await resp.json();
      return data.response;
    } catch (error) {
      this.openSnackBarWarning();
    }
  }
  openSnackBarWarning() {
    this.snackBar.open('не удалено', 'ошибка сервера');
  }
  openSnackBarWarningUpdate() {
    this.snackBar.open('не удалось изменить новость', 'ошибка сервера');
  }
}
