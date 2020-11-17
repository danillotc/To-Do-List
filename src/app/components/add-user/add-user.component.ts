import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { User } from '../../models/user.model';
import { TaskControlService } from '../../services/task-control.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser = {} as User;
  userId;
  usuarios;

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    private taskService: TaskControlService,
    private toastr: ToastrService,
    ) { 
    this.newUser.id;
    this.newUser.username = '';
    this.newUser.password = '';
  }

  ngOnInit(): void {
  }

  criarUsuario() {

    var dateObj = new Date();

    this.taskService.criarUsuario(this.newUser).subscribe(data=>console.log(''));

    this.taskService.carregarUsuarios().subscribe(data=>{
      this.usuarios = data;
      this.userId = this.usuarios.slice(-1)[0];

      this.taskService.criarCategorias({
        "id_user": parseInt(this.userId.id),
        "nome_categoria": "Minha primeira categoria",
        "nome_tarefa": "Criar minha primeria tarefa",
        "descricao": "Tenho que criar minha primeira tarefa",
        "data_inicio": `${dateObj.getUTCFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`,
        "prazo": `${dateObj.getUTCFullYear()}-${(dateObj.getMonth() + 1)}-${(dateObj.getDate() + 1)}`,
        "status": false
      }).subscribe(data=>console.log(''))

    })

    this.toastr.success("Usuario " + this.newUser.username + "criado com sucesso!");

    setTimeout(() => {
      location.reload();
    }, 500);
  }

  fechar() {
    this.dialogRef.close()
  }
}
