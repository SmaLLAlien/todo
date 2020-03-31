import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TODO} from './todo-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  url = 'https://todo-e2d05.firebaseio.com/todo.json';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<{[key: string]: TODO}> {
    return this.http.get<{[key: string]: TODO}>(this.url);
  }

  addTodo(todo: TODO): Observable<{name: string}> {
     return this.http.post<{name: string}>(this.url, todo);
  }

  updateTodo(todo: {[key: string]: TODO}) {
    const key = Object.keys(todo)[0];
    return this.http.patch(`https://todo-e2d05.firebaseio.com/todo/${key}.json`, todo[key]);
  }

  deleteTodo(todo: {[key: string]: TODO}) {
    const key = Object.keys(todo)[0];
    return this.http.delete<{}>(`https://todo-e2d05.firebaseio.com/todo/${key}.json`);
  }
}
