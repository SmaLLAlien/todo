import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {TODO} from '../../../core/todo-model';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('in', [
      state('inn', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
      state('out', style({
        'background-color': 'red',
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('void => inn', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate(300)
      ]),
      transition('inn => out', [
        animate(300, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        )
      ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  state = 'inn';

  @Input() todo: TODO;
  @Output() onEdit: EventEmitter<TODO> = new EventEmitter();
  @Output() onDelete: EventEmitter<TODO> = new EventEmitter();
  @HostBinding('@in')
  public animatePaged = false;

  constructor() { }

  ngOnInit(): void {

  }

  edit(todo: TODO) {
    this.onEdit.emit(todo);
  }

  delete(todo: TODO) {
    this.state = 'out';

  }

  onAnimationEvent( event: AnimationEvent ) {
    if (this.state === 'out') {
      this.onDelete.emit(this.todo);
    }
  }

}
