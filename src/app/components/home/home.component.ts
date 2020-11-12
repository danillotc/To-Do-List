import { Component, OnInit } from '@angular/core';

import { TaskControlService } from '../../services/task-control.service';

import { Category } from '../../models/category.model';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category: Category;
  newCategory = {} as Category;
  listaCategorias = []

  pegarCategorias() {
    this.taskControl.carregarCategorias().subscribe((data: Category) => {

      this.category = data;

      for (let i = 0; i < 150; i++) {
        if (this.listaCategorias.includes(this.category[i].nome_categoria) != true) {
          this.listaCategorias.push(this.category[i].nome_categoria)
        }
      }

    });
  }

  criarCategorias() {
    this.taskControl.criarCategorias(this.newCategory).subscribe((data)=>{
      console.log(data);
    });

    location.reload();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor(private taskControl: TaskControlService) { }

  ngOnInit() {

    this.pegarCategorias();

  }

}
