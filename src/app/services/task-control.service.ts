import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()

export class TaskControlService {

  url = 'http://localhost:3000';

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  carregarCategorias(): Observable<Category>{

    return this.http.get<Category>(this.url + '/tarefas', this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  criarCategorias(categoria: Category): Observable<Category>{

    return this.http.post<Category>(this.url + '/tarefas', categoria ,this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  handleError(error){
    let errorMessage = '';

    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
