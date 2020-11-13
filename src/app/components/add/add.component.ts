import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { FormGroup } from '@angular/forms';
import { TaskControlService } from '../../services/task-control.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  category;
  categoriesList = [];
  newCategory: Category = {
    id: 0,
    id_user: 0,
    nome_categoria: "",
    nome_tarefa: "",
    data_inicio: "",
    prazo: "",
    descricao: "",
    outros: ""
  };

  constructor(
    private dialogRef: MatDialogRef<AddComponent>,
    private taskControl: TaskControlService,
    private modalAdd: MatDialog) {
  }

  ngOnInit(): void {
    this.pegarCategorias();
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

  criarCategorias() {
    this.taskControl.criarCategorias(this.newCategory).subscribe((data) => {
      console.log();
    });
    location.reload();
  }

}
