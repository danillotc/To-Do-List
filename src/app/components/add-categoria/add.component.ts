import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { FormGroup } from '@angular/forms';
import { TaskControlService } from '../../services/task-control.service';
import { Category } from '../../models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  category;
  categoriesList = [];
  newCategory = {} as Category;
  userId = document.cookie.split('token=')[1];
  newDate = new Date();
  today;

  constructor(
      private dialogRef: MatDialogRef<AddComponent>,
      private taskControl: TaskControlService,
      private toastr: ToastrService
    ) {
  }

  ngOnInit(): void {
    this.pegarCategorias();
    this.today = `${this.newDate.getUTCFullYear()}-${(this.newDate.getUTCMonth() + 1)}-${this.newDate.getUTCDate()}`
  }

  pegarCategorias() {
    this.taskControl.carregarCategorias().subscribe((data: Category) => {
      this.category = data;
      try {
        for (let i = 0; i < 300; i++) {
          if (this.categoriesList.includes(this.category[i].nome_categoria) != true && this.category[i].nome_categoria != 'hidd3n_c4tegory123456' && parseInt(this.category[i].id_user) == parseInt(this.userId)) {
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

  criarCategorias(selectValue) {

    this.newCategory.id_user = parseInt(document.cookie.split('token=')[1]);

    if(selectValue == 'Nova categoria'){
      this.taskControl.criarCategorias(this.newCategory).subscribe((data) => {
        console.log();
      });
    }else{
      this.newCategory.nome_categoria = selectValue;
      this.taskControl.criarCategorias(this.newCategory).subscribe((data) => {
        console.log();
      });
    }

    this.toastr.success('Tarefa criado com sucesso!');

    document.getElementById('closeButton').click();
    
    setTimeout(() => {
      location.reload();
    }, 500);
  }

}
