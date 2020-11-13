import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notificacoes = ['Uma nova tarefa foi criada!'];

  constructor() { }

  ngOnInit() {

  }

}
