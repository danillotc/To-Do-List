import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DemoDialogComponent } from '../demo-dialog/demo-dialog.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private modalAdd: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.disableClose = true;
    this.modalAdd.open(DemoDialogComponent, dialogConfig);
  }

}
