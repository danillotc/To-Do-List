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
          })
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
  
          $('#adicionarTarefa').css('color', '');
          $('#btnSair').css('color', '');
          $('.mat-toolbar.mat-primary').css({
            'box-shadow': '#ffff',
            'background': '#c2185b',
            'color': 'white'
          })
        }
      },200)
    }, 200);
  }

  abrirModalAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    this.modalAdd.open(AddComponent, dialogConfig)
  }

  constructor(private modalAdd: MatDialog, private taskControl: TaskControlService) { }

  ngOnInit() {

    this.taskControl.carregarUsuarios().subscribe(data => {
      console.log(data);
      this.usuario = data[1].username;
    })

  }

}
