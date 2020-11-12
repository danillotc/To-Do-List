import { Component } from '@angular/core';

import { TaskControlService } from './services/task-control.service';

import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private taskControl: TaskControlService) {}

}
