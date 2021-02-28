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
    };
    this.todoService.addTask(newTodo);
    this.getAndSetTodos();
  };

  updateCompleted = (index: number): void => {
    this.todoService.updateCompleted(index);
    this.getAndSetTodos();
  };

  deleteTask = (index: number): void => {
    this.todoService.deleteTask(index);
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
