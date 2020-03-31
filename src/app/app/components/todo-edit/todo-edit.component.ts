import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TODO} from '../../../core/todo-model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TodoEditComponent implements OnInit {
  protected todo: TODO;
  @Output() todoItem: EventEmitter<TODO> = new EventEmitter<TODO>();
  @Input() set item(todo: TODO) {
    if (todo) {
      this.title.setValue(todo.title);
      this.todo = todo;
    }
  }

  title = new FormControl('');

  ngOnInit(): void {

  }

  save() {
    this.todo.title = this.title.value;
    this.todoItem.emit(this.todo);
  }
}
