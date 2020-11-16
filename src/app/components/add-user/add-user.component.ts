import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { User } from '../../models/user.model';
import { TaskControlService } from '../../services/task-control.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser = {} as User;

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    private taskService: TaskControlService,
    private toastr: ToastrService
    ) { 
    this.newUser.id;
    this.newUser.username = '';
    this.newUser.password = '';
  }

  ngOnInit(): void {
  }

  criarUsuario() {
    this.taskService.criarUsuario(this.newUser).subscribe(data=>console.log());
    this.toastr.success("Usuario " + this.newUser.username + " criado com sucesso!");
    location.reload();
  }

  fechar() {
    this.dialogRef.close()
  }
}
