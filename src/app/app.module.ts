import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
 
import { AppComponent } from './app.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add-categoria/add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemoDialogComponent } from './components/demo-dialog/demo-dialog.component';
import { DemoDialogEditComponent } from './components/demo-dialog-edit/demo-dialog-edit.component';
import { DemoDialogDetalhesComponent } from './components/demo-dialog-detalhes/demo-dialog-detalhes.component';
 
import { TaskControlService } from './services/task-control.service';
 
import { FiltroPipe, DateFiltro } from './pipe/filtro.pipe';


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
    DateFiltro,
    DemoComponent,
    DemoDialogComponent,
    DemoDialogEditComponent,
    DemoDialogDetalhesComponent
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
