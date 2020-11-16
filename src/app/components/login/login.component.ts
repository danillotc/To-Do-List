import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { TaskControlService } from '../../services/task-control.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {} as User;
  listaUsuarios;

  constructor(
    private taskControl: TaskControlService,
    private router: Router
    ) {
      this.user.id=0;
      this.user.username='';
      this.user.password='';
     }

  ngOnInit(): void {
    this.pegarUsuarios();
  }
  
  pegarUsuarios() {
    this.taskControl.carregarUsuarios().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }

  login() {
    this.router.navigate(['/home'])
  }

}
