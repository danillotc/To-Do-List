import { Component } from '@angular/core';

import { TaskControlService } from './services/task-control.service';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Category } from './models/category.model';
// import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  category: Category;

  constructor(private taskControl: TaskControlService) {}
 
  ngOnInit(){

    this.taskControl.carregarCategorias().subscribe((data: Category)=>{
      this.category = data;
      console.log(this.category)
    });

    
  }


}
