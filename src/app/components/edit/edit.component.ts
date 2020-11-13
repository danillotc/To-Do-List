import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup } from '@angular/forms';
import { TaskControlService } from '../../services/task-control.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  category;
  categoriesList = [];

  nome_tarefa;
  nome_categoria;
  descricao;
  data_inicio;
  data_final;
  selected;

  constructor(
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private taskControl: TaskControlService) {
    this.nome_tarefa = data.nome_tarefa;
    this.nome_categoria = data.nome_categoria;
  }

  ngOnInit(): void {
    this.pegarCategorias();

    console.log(this.category)

  }

  pegarCategorias() {
    this.taskControl.carregarCategorias().subscribe((data: Category) => {

      this.category = data;

      try {
        for (let i = 0; i < 300; i++) {
          if (this.categoriesList.includes(this.category[i].nome_categoria) != true) {
            this.categoriesList.push(this.category[i].nome_categoria)
          }
        }
      } catch {
      }

    });
  }

  fechar() {
    this.dialogRef.close()
  }

  salvar() {
    console.log(this.category);
    this.fechar();
  }

}
