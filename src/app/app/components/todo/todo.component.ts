import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TODO} from '../../../core/todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  @Input() todo: TODO;
  @Output() onEdit: EventEmitter<TODO> = new EventEmitter();
  @Output() onDelete: EventEmitter<TODO> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  edit(todo: TODO) {
    this.onEdit.emit(todo);
  }

  delete(todo: TODO) {
    this.onDelete.emit(todo);
  }
}
