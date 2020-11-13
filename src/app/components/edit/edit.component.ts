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

  constructor(
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private taskControl: TaskControlService) {
    this.category = data;
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

  salvar() {
    this.fechar();
  }

}
