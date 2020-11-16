import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { TaskControlService } from './services/task-control.service';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';

import { FiltroPipe, FiltroTarefas } from './pipe/filtro.pipe';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { ForgotComponent } from './components/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DragDropComponent,
    EditComponent,
    AddComponent,
    FiltroPipe,
    AddUserComponent,
    DetalhesComponent,
    ForgotComponent,
    FiltroTarefas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      timeOut: 1000
    }),
  ],
  providers: [TaskControlService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
