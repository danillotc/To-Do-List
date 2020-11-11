import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';


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

    return this.http.get<Category>(this.url + '/categories', this.options);

  }

}
