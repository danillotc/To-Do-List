import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddComponent } from '../../components/add/add.component';

import * as $ from 'jquery'
import { TaskControlService } from 'src/app/services/task-control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoriaPesquisada = '';
  isChecked = false;
  usuario;

  constructor(
      private modalAdd: MatDialog, 
      private taskControl: TaskControlService
    ) { }

  mudarContraste() {
    setTimeout(() => {

      setInterval(()=>{
        if (this.isChecked) {
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
          
          document.getElementById('menu').style.color = 'yellow';
  
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
          document.getElementById('adicionarTarefa').style.color = '';
          document.getElementById('btnSair').style.color = '';
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
      },200)
    }, 200);
  }

  abrirModalAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    this.modalAdd.open(AddComponent, dialogConfig);
  }

  ngOnInit() {
    this.taskControl.carregarUsuarios().subscribe(data => {
      console.log();
      this.usuario = data[1].username;
    })

  }

}
