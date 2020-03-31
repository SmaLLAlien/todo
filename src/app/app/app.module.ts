import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app/app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TodoService} from './todo.service';
import {TodoApiService} from '../core/todo-api.service';
import { TodosComponent } from './containers/todos/todos.component';
import { EditComponent } from './containers/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoEditComponent,
    TodosComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TodoService, TodoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
