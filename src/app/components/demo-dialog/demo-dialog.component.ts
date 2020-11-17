import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DemoDialogDetalhesComponent } from '../demo-dialog-detalhes/demo-dialog-detalhes.component';
import { DemoDialogEditComponent } from '../demo-dialog-edit/demo-dialog-edit.component';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.css']
})
export class DemoDialogComponent implements OnInit {

  constructor(
    private modalAdd: MatDialog,
    private dialogRef: MatDialogRef <DemoDialogComponent>
    ) { }

  ngOnInit(): void {
  }
  
  movies = [
    'Criar uma conta no Task Manager',
    'Compartilhar o Task Manager',
    'Concordar que o Task Manager vai facilitar sua vida',
    'Dar um abraço em alguém',
    'Tomar água',
    'Estudar muito',
    'Assistir séries',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  abrirModalDetalhes(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = item;
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    this.modalAdd.open(DemoDialogDetalhesComponent, dialogConfig);
  }

  abrirModalEdit(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = item;
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    this.modalAdd.open(DemoDialogEditComponent, dialogConfig);
  }

  fechar() {
    this.dialogRef.close()
  }

}
