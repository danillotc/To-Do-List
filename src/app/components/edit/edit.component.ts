import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup } from '@angular/forms';
import { TaskControlService } from '../../services/task-control.service';
import { Category } from '../../models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  category = [];
  categoriesList = [];
  newCategory = {} as Category;
  userId = document.cookie.split('token=')[1];

  selected;

  constructor(
      private dialogRef: MatDialogRef<EditComponent>,
      @Inject(MAT_DIALOG_DATA) data,
      private taskControl: TaskControlService,
      private toast: ToastrService
    ) {
    this.newCategory.id = data.id;
    this.newCategory.nome_tarefa = data.nome_tarefa;
    this.newCategory.nome_categoria = data.nome_categoria;
    this.newCategory.descricao = data.descricao;
    this.newCategory.data_inicio = data.data_inicio;
    this.newCategory.prazo = data.prazo;
    this.newCategory.outros = data.outros;
  }

  ngOnInit(): void {
    
    this.pegarCategorias();

  }

  pegarCategorias() {
    this.taskControl.carregarCategorias().subscribe((data: Category) => {
    //   this.category.push(data);
    //   try {
    //     for (let i = 0; i < 300; i++) {
    //       if (this.categoriesList.includes(this.category[i].nome_categoria) != true && this.category[i].nome_categoria != 'hidd3n_c4tegory123456' && parseInt(this.category[i].id_user) == parseInt(this.userId)) {
    //         this.categoriesList.push(this.category[i].nome_categoria)
    //       }
    //     }
    //   } catch {
    //   }

    for (let i = 0; i < 300; i++) {
      try{
        this.category.push(data[i]);
      }catch{}
    }

    for(let item of this.category){
      try {
        if (this.categoriesList.includes(item.nome_categoria) != true && item.nome_categoria != 'hidd3n_c4tegory123456') {
          this.categoriesList.push(item.nome_categoria)
        }
      } catch { }
    }

    });
  }

  fechar() {
    this.dialogRef.close()
  }

  salvar(id) {

    this.newCategory.id_user = parseInt(document.cookie.split('token=')[1]);

    this.taskControl.atualizarCategoria(id,this.newCategory).subscribe((data)=>{
      this.toast.success('Tarefa alterado com sucesso!');
      setTimeout(() => {
        location.reload();
      }, 500);
    })
  }

}
