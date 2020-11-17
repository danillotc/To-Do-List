import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup } from '@angular/forms';
import { TaskControlService } from '../../services/task-control.service';
import { Category } from '../../models/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  
  form: FormGroup;
  category;
  categoriesList = [];
  newCategory = {} as Category;

  selected;

  constructor(
      private dialogRef: MatDialogRef<DetalhesComponent>,
      @Inject(MAT_DIALOG_DATA) data,
      private taskControl: TaskControlService,
      private toast: ToastrService
    ) {
      try{
        this.newCategory.id = data.id;
        this.newCategory.nome_tarefa = data.nome_tarefa;
        this.newCategory.nome_categoria = data.nome_categoria;
        this.newCategory.descricao = data.descricao;
        this.newCategory.data_inicio = data.data_inicio;
        this.newCategory.prazo = data.prazo;
        this.newCategory.status = data.status;
        this.newCategory.outros = data.outros;
      }catch{}
  }

  ngOnInit(): void {
  }

  atualizarStatusTarefa(){
    this.newCategory.id_user = parseInt(document.cookie.split('token=')[1]);

    setTimeout(() => {
      this.taskControl.atualizarCategoria(this.newCategory.id, this.newCategory).subscribe(data=>{
        this.toast.success('Alteração concluida!');
      })
      location.reload();
    }, 200);
  }

  fechar() {
    this.dialogRef.close()
  }

}
