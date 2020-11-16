import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { User } from '../../models/user.model';
import { TaskControlService } from '../../services/task-control.service';
import { AddUserComponent } from '../../components/add-user/add-user.component';


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
    private modalAdd: MatDialog
    ) {
      this.user.id;
      this.user.username='';
      this.user.password='';
     }

  ngOnInit(): void {
    this.pegarUsuarios();
  }
  
  pegarUsuarios() {
    this.taskControl.carregarUsuarios().subscribe((data) => {
      for (let i=0; i<100; i++) {
        if (data[i]) {
          this.listaUsuarios.push(data[i]);
        }
      }
    });
  }

  login() {
    if (this.listaUsuarios.find(user => user.username === this.user.username)) {
      if (this.listaUsuarios.find(user => user.password === this.user.password)) {
        this.router.navigate(['/home'])
      } else {
        alert("Senha incorreta")
      }
    } else {
      alert('O usuário não existe')
    }
  }

  abrirModalAddUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.modalAdd.open(AddUserComponent, dialogConfig)
  }

  abrirModalEsqueci() {
    alert("Eita tristeza :/")
  }
}
