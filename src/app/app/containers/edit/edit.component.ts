import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TODO} from '../../../core/todo-model';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../todo.service';
import {flatMap, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  id: string;
  todo: Observable<TODO>;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.id = param.id);
    if (this.id) {
      this.todo = this.getAllTodos(this.id);
    }
  }

  private getTodo(id: string, obj: {[key: string]: TODO}) {
    if (obj[id]) {
      return obj[id];
    }
  }

  private getAllTodos(id): Observable< TODO> {
    return this.todoService.getTodos().pipe(
      flatMap(todosObj => {
        return of(this.getTodo(id, todosObj));
      }),
    );
  }

  saveItem(todo: TODO) {
    const obj = {[this.id]: todo};
    this.todoService.updateTodo(obj).pipe(
      tap(() => {
        this.router.navigate(['/todo-list']);
      })
    ).subscribe();
  }
}
