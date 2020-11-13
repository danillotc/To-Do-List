import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddComponent } from '../../components/add/add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notificacoes = ['Uma nova tarefa foi criada!'];

  adicionarNotificacoes(){
    this.notificacoes.push('oi')
  }

  abrirModalAdd(id) {

    if(id == 1){
      document.getElementById('btnModal').click()
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;

    this.modalAdd.open(AddComponent, dialogConfig)
  }

  constructor(private modalAdd: MatDialog) { }

  ngOnInit() {

  }

}
