import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup } from '@angular/forms';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  category;

  constructor(
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.category = data;
    }

  ngOnInit(): void {}

  fechar() { 
    this.dialogRef.close()
  }

  salvar() { 
    console.log(this.category);
    this.fechar();
  }

}
