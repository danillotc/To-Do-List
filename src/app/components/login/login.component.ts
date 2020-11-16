import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { User } from '../../models/user.model';
import { TaskControlService } from '../../services/task-control.service';
import { AddUserComponent } from '../../components/add-user/add-user.component';
import { ForgotComponent } from '../../components/forgot/forgot.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {} as User;
  listaUsuarios = [];

  constructor(
    private taskControl: TaskControlService,
    private router: Router,
    private modalAdd: MatDialog,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.pegarUsuarios();
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

  login() {
    if (this.listaUsuarios.find(user => user.username === this.user.username)) {
      if (this.listaUsuarios.find(user => user.username === this.user.username && user.password === this.user.password)) {
        let token = this.listaUsuarios.findIndex(user => user.password === this.user.password);
        document.cookie=`token = ${​​token}​​`;
        this.router.navigate(['/home'])
      } else {
        this.toastr.error("Senha incorreta")
      }
    } else {
      this.toastr.error('O usuário não existe')
    }
  }

  abrirModalAddUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.modalAdd.open(AddUserComponent, dialogConfig)
  }

  abrirModalEsqueci() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.modalAdd.open(ForgotComponent, dialogConfig)
  }
}
