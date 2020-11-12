import { Component, OnInit } from '@angular/core';

import { TaskControlService } from '../../services/task-control.service';

import { Category } from '../../models/category.model';

import * as $ from 'jquery';

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

    this.newCategory.id_user = 1;
    this.newCategory.nome_categoria = $('#nomeCategoria').val();
    this.newCategory.nome_tarefa = $('#nomeTarefa').val();
    this.newCategory.data_inicio = $('#dataInicio').val();
    this.newCategory.prazo = $('#dataFim').val();
    this.newCategory.descricao = $('#descricao').val();
    this.newCategory.outros = $('#outros').val();
    
    this.taskControl.criarCategorias(this.newCategory);

  }

  constructor(private taskControl: TaskControlService) {}
 
  ngOnInit(){

    this.pegarCategorias();
    
  }

}
