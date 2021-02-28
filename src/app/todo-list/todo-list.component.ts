import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  filterWord: string = '';
  darkMode!: boolean;
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAndSetTodos();
    this.getTheme();
  }

  getAndSetTodos = (): void => {
    this.todos = this.todoService.getTodos(this.filterWord);
    this.calculateUncompleted();
  };

  calculateUncompleted = (): number => {
    let notComplete: number = 0;
    for (let todo of this.todos) {
      if (!todo.completed) {
        notComplete++;
      }
    }
    return notComplete;
  };

  addTask = (formObject: any): void => {
    let newTodo = {
      task: formObject.newTask,
      completed: false,
      id: 0,
    };
    this.todoService.addTask(newTodo);
    this.getAndSetTodos();
    console.log(this.todos);
  };

  updateCompleted = (todo: Todo): void => {
    this.todoService.updateCompleted(todo);
    this.getAndSetTodos();
  };

  deleteTask = (todo: Todo): void => {
    this.todoService.deleteTask(todo);
    this.getAndSetTodos();
  };

  clearCompleted = () => {
    this.todoService.clearCompleted();
    this.getAndSetTodos();
  };

  setFilterWord = (newFilter: string) => {
    this.filterWord = newFilter;
    this.getAndSetTodos();
  };

  getTheme = () => {
    this.darkMode = this.todoService.getTheme();
  };

  switchTheme = () => {
    this.todoService.toggleTheme();
    this.getTheme();
  };
}
