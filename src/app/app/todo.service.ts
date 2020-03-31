import { Injectable } from '@angular/core';
import {TodoApiService} from '../core/todo-api.service';
import {Observable} from 'rxjs';
import {TODO} from '../core/todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private apiService: TodoApiService) { }

  getTodos(): Observable<{[key: string]: TODO}> {
    return this.apiService.getTodos();
  }

  addTodo(todo: TODO): Observable<{name: string}> {
    return this.apiService.addTodo(todo);
  }

  updateTodo(todo: {[key: string]: TODO}) {
    return this.apiService.updateTodo(todo);
  }

  deleteTodo(todo: {[key: string]: TODO}) {
    return this.apiService.deleteTodo(todo);
  }
}
