import { Component, OnInit } from '@angular/core';

import { TaskControlService } from '../../services/task-control.service';

import { Category } from '../../models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category: Category;
  newCategory = {} as Category; 
  listaCategorias = []

  pegarCategorias(){
    this.taskControl.carregarCategorias().subscribe((data: Category)=>{

      this.category = data;

      for(let i = 0; i < 150; i++){
        if(this.listaCategorias.includes(this.category[i].nome_categoria) != true){
          this.listaCategorias.push(this.category[i].nome_categoria)
        }
      }

    });
  }

  criarCategorias(){
    
    this.taskControl.criarCategorias(this.newCategory);
    // location.reload();

  }

  constructor(private taskControl: TaskControlService) {}
 
  ngOnInit(){

    this.pegarCategorias();
    
  }

}
