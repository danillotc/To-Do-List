import { Component, Input, OnInit } from '@angular/core';

import { Category } from '../../models/category.model';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EditComponent } from '../edit/edit.component';
import { DetalhesComponent } from '../detalhes/detalhes.component';

import { ToastrService } from 'ngx-toastr';
import { TaskControlService } from '../../services/task-control.service';

import * as $ from 'jquery'

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  @Input() filtroCategoria;

  userId = document.cookie.split('token=')[1];

  category = [];
  listaCategorias = [];

  constructor(
    private taskControl: TaskControlService, 
    private modalEdit: MatDialog, 
    private toastr: ToastrService
  ) { }

  pegarCategorias() {
    this.taskControl.carregarCategorias().subscribe((data) => {
      
      for (let i = 0; i < 300; i++) {
        try{
          if (this.listaCategorias.includes(this.category[i].nome_categoria) != true && this.category[i].nome_categoria != 'hidd3n_c4tegory123456'  && parseInt(this.category[i].id_user) == parseInt(this.userId)) {
            this.listaCategorias.push(this.category[i].nome_categoria)
          }
        }catch{}
        try{
          if(parseInt(data[i].id_user) == parseInt(this.userId)){
            this.category.push(data[i])
          }
        }catch{}
      }
    });
    setTimeout(() => {
      this.category.map(data => {
        if (data.status == true) {
          $(`#tarefa${data.id}`).addClass('concluido');
        }
      })
    }, 200);
    // console.log(this.category)
  }

  apagarCategoria(id) {
    if (window.confirm('Realmente deseja excluir esta tarefa?')) {
      this.taskControl.excluirCategoria(id).subscribe((data) => {
        this.toastr.success('Exclusão concluida com sucesso!');
      });
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.category, event.previousIndex, event.currentIndex);
  }

  abrirModalEdit(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.category[id];
    dialogConfig.width = '500px';
    this.modalEdit.open(EditComponent, dialogConfig)
  }

  abrirModalDetalhes(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.category[id];
    dialogConfig.width = '500px';
    this.modalEdit.open(DetalhesComponent, dialogConfig)
  }

  ngOnInit() {
    this.pegarCategorias();
  }

}
