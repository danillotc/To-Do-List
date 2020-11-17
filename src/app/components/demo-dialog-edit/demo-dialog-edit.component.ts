import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-demo-dialog-edit',
  templateUrl: './demo-dialog-edit.component.html',
  styleUrls: ['./demo-dialog-edit.component.css']
})
export class DemoDialogEditComponent implements OnInit {

  dataDialog;
  date;
  tomorrowDate;
  selectedItem = 'Coisas para fazer no dia de hoje'; 
  
  constructor(
    private dialogRef: MatDialogRef <DemoDialogEditComponent>,
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
