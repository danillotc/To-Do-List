import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

import * as $ from 'jquery';

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

    return this.http.get<Category>(this.url + '/tarefas', this.options);

  }

  criarCategorias(categoria:Category){

    $.post(this.url+ '/tarefas', categoria)

  }

  // criarCategorias(categoria: Category): Observable<Category>{

  //   console.log(categoria)
    
  //   return this.http.post<Category>(this.url + '/tarefas', JSON.stringify(categoria) ,this.options);

  // }

}
