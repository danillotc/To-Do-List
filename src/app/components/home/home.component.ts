import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddComponent } from '../../components/addCategoria/add.component';

import * as $ from 'jquery'
import { TaskControlService } from 'src/app/services/task-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoriaPesquisada = '';
  isChecked;
  usuario;
  userId = document.cookie.split('token=')[1];

  constructor(
    private modalAdd: MatDialog,
    private taskControl: TaskControlService,
    private router: Router
  ) { }

  mudarContraste() {
    if (this.isChecked == true) {
      document.querySelectorAll('h1').forEach(element => {
        element.style.color = 'yellow';
      })
      document.querySelectorAll('h2').forEach(element => {
        element.style.color = 'yellow';
      })
      document.querySelectorAll('input').forEach(element => {
        element.style.color = 'yellow';
      })
      document.querySelectorAll('span').forEach(element => {
        element.style.color = 'yellow';
      })
      document.querySelectorAll('textarea').forEach(element => {
        element.style.color = 'yellow';
      })
      $('mat-icon').css('color', 'black');
      $('#btnSair').css('color', 'white');
      $('#detalhes').css('color','yellow');
      document.getElementById('menu').style.color = 'yellow';
      document.getElementById('adicionarTarefa').style.color = '';

      $('.mat-toolbar.mat-primary').css({
        'box-shadow': '#ffff',
        'background': 'black',
        'color': '#fff'
      });
      $('.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background').css({
        'background-color': 'rgb(221, 29, 221)'
      });
      $(`.concluido`).addClass('concluidoContraste');

    } else {        
      document.querySelectorAll('h1').forEach(element => {
        element.style.color = '';
      })
      document.querySelectorAll('h2').forEach(element => {
        element.style.color = '';
      })
      document.querySelectorAll('input').forEach(element => {
        element.style.color = '';
      })
      document.querySelectorAll('span').forEach(element => {
        element.style.color = '';
      })
      document.querySelectorAll('textarea').forEach(element => {
        element.style.color = '';
      })
      document.getElementById('menu').style.color = 'white';
      document.getElementById('btnSair').style.color = '';
      $('#detalhes').css('color','');
      $('.mat-toolbar.mat-primary').css({
        'box-shadow': '#ffff',
        'background': '#c2185b',
        'color': 'white'
      });
      $('.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background').css({
        'background-color': 'rgb(45, 214, 45)'
      });
      $(`.concluidoContraste`).addClass('concluido');
      $(`.concluidoContraste`).removeClass('concluidoContraste');
    }
  }

  abrirModalAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    this.modalAdd.open(AddComponent, dialogConfig);
  }

  verificarAutentificacao(){
    const idUsuario = document.cookie.split('token=')[1];

    if(idUsuario == '0' || idUsuario == undefined){
      location.href = '/login'
    }else{
      this.taskControl.carregarUsuariosPorId(parseInt(idUsuario)).subscribe(data => {
        this.usuario = data.username
      })
    }
  }

  sair(){
    this.isChecked = false;
    document.cookie = "token=0";
    this.verificarAutentificacao();
  }

  ngOnInit() {

    setInterval(()=>{
      this.mudarContraste();
    },500)

    this.verificarAutentificacao();
  }

}
