import { Component, OnInit } from '@angular/core';

import { TaskControlService } from '../../services/task-control.service';

import { Category } from '../../models/category.model';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {


  category;
  newCategory = {} as Category;
  listaCategorias = [];

  pegarCategorias() {
    this.taskControl.carregarCategorias().subscribe((data: Category) => {

      this.category = data;

      try{
        for (let i = 0; i < 300; i++) {
          if (this.listaCategorias.includes(this.category[i].nome_categoria) != true) {
            this.listaCategorias.push(this.category[i].nome_categoria)
          }
        }
      }catch{
      }

    });

  }

  criarCategorias() {
    this.taskControl.criarCategorias(this.newCategory).subscribe((data) => {
      console.log(data);
    });
    location.reload();
  }

  apagarCategoria(id) {
    if(window.confirm('Quer mesmo excluir esta tarefa?')) {
      this.taskControl.excluirCategoria(id).subscribe((data) => {
        console.log(data);
      });
      location.reload();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.category, event.previousIndex, event.currentIndex);
  }

  constructor(private taskControl: TaskControlService, private modalEdit: MatDialog) { }

  abrirModalEdit(id) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.data = this.category[id-1];

    this.modalEdit.open(EditComponent, dialogConfig)
  }

  ngOnInit() {

    this.pegarCategorias();

  }

}
