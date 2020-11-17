import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-demo-dialog-detalhes',
  templateUrl: './demo-dialog-detalhes.component.html',
  styleUrls: ['./demo-dialog-detalhes.component.css']
})
export class DemoDialogDetalhesComponent implements OnInit {

  dataDialog;
  date;
  tomorrowDate;

constructor(
  private dialogRef: MatDialogRef < DemoDialogDetalhesComponent >,
    @Inject(MAT_DIALOG_DATA) data
  ) {
  this.dataDialog = data
}

ngOnInit(): void {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  this.date = year + "-" + month + "-" + day;
  this.tomorrowDate = year + "-" + month  + "-" + (day + 1);
}

fechar() {
  this.dialogRef.close()
}

}
