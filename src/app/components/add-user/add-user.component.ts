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
    var month = dateObj.getMonth()+1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var data_inicio = year + "-" + month + "-" + day;
    var prazo = day == 31 ? year + "-" + month + "-" + 1 : year + "-" + month + "-" + (day + 1);

    this.taskService.criarUsuario(this.newUser).subscribe(data => console.log(''));

    this.taskService.carregarUsuarios().subscribe(data => {
      this.usuarios = data;
      this.userId = this.usuarios.slice(-1)[0];

      this.taskService.criarCategorias({
        "id_user": parseInt(this.userId.id),
        "nome_categoria": "Minha primeira categoria",
        "nome_tarefa": "Criar minha primeria tarefa",
        "descricao": "Tenho que criar minha primeira tarefa",
        "data_inicio": `${data_inicio}`,
        "prazo": `${prazo}`,
        "status": false
      }).subscribe(data => console.log(''))

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
