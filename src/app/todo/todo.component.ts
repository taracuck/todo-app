import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todoRef!: Todo;
  @Input() darkModeRef!: boolean;
  @Output() completedEvent = new EventEmitter<void>();
  @Output() deleteEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  emitCompletedEvent = (): void => {
    this.completedEvent.emit();
  };

  emitDeleteEvent = (): void => {
    this.deleteEvent.emit();
  };
}
