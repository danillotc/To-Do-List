import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category.model';
import { User } from '../models/user.model';
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

  // Controle de categorias
  carregarCategorias(): Observable<Category>{

    return this.http.get<Category>(this.url + '/tarefas', this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  criarCategorias(categoria): Observable<Category>{

    return this.http.post<Category>(this.url + '/tarefas', categoria ,this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  atualizarCategoria(id, categoria): Observable<Category>{
    return this.http.put<Category>(this.url + '/tarefas/' + id, categoria, this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  excluirCategoria(id) {
    return this.http.delete<Category>(this.url + '/tarefas/' + id, this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Controle de usuários
  carregarUsuariosPorId(id:number): Observable<User> {
    if(id){
      return this.http.get<User>(this.url + '/user/' + id, this.options)
      .pipe (
        retry(1),
        catchError(this.handleError)
      )
    }
  }

  carregarUsuarios(): Observable<User> {
    return this.http.get<User>(this.url + '/user', this.options)
      .pipe (
        retry(1),
        catchError(this.handleError)
      )
  }

  criarUsuario(usuario: User): Observable<User>{
   
    return this.http.post<User>(this.url + '/user', usuario, this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  atualizarUsuario(id, usuario): Observable<User> {
    return this.http.put<User>(this.url + '/user/' + id, usuario, this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  excluirUsuario(id) {
    return this.http.delete<User>(this.url + '/user/' + id, this.options)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Controle de erros
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
