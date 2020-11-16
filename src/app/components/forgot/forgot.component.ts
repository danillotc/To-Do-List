import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { TaskControlService } from '../../services/task-control.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  usuario;
  senha;
  listaUsuarios = [];

  constructor(
    private dialogRef: MatDialogRef<ForgotComponent>,
    private taskControl: TaskControlService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pegarUsuarios()
  }

  recuperarSenha() {
    try {
      let id = this.listaUsuarios.findIndex((data)=>data.username==this.usuario)
      this.senha = this.listaUsuarios[id].password;
    } catch {
      this.toastr.error("usuário não encontrado");
    }
  }

  fechar() {
    this.dialogRef.close()
  }

  pegarUsuarios() {
    this.taskControl.carregarUsuarios().subscribe((data) => {
      try {
        for (let i=0; i<100; i++) {
          if (data[i]) {
            this.listaUsuarios.push(data[i]);
          }
        }
      } catch {}
    });
  }

}
