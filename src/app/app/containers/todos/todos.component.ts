import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TODO} from '../../../core/todo-model';
import {TodoService} from '../../todo.service';
import {Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {

  @ViewChild('addInput') input: ElementRef;
  todos: Observable<TODO[]>;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.todos = this.getTodos();
  }

  addTodo(addInput: string) {
    if (addInput.trim()) {
      const todo = {title: addInput};
      this.todos = this.todoService.addTodo(todo).pipe(
        switchMap(() => this.getTodos())
      );

      this.input.nativeElement.value = '';
    }
  }

  getTodos(): Observable<TODO[]> {
    return this.todoService.getTodos().pipe(
      map((obj) => {
        const tempTodos = [];
        const keys = Object.keys((obj));
        keys.forEach(key => tempTodos.push({...obj[key], id: key}));
        return tempTodos;
      }),
      map(todos => {
        return todos;
      })
    );
  }

  openEdit(todo: TODO) {
    this.router.navigate(['/edit', `${todo.id}`]);
  }

  delete(todo: TODO) {
    const obj = {[todo.id]: todo};
    this.todos = this.todoService.deleteTodo(obj).pipe(
      switchMap(() => this.getTodos())
    );
  }
}
