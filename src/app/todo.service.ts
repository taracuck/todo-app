import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    {
      task: 'Complete online JavaScript course',
      completed: true,
    },
    {
      task: 'Jog around the park 3x',
      completed: false,
    },
    {
      task: '10 minutes meditation',
      completed: false,
    },
    {
      task: 'Read for 1 hour',
      completed: false,
    },
    {
      task: 'Pick up groceries',
      completed: false,
    },
    {
      task: 'Complete Todo App on Frontend Mentor',
      completed: false,
    },
  ];
  darkMode: boolean = false;

  constructor() {}

  getTodos = (filterWord: string): Todo[] => {
    let filteredTasks = this.todos;
    if (filterWord.toLowerCase() === 'completed') {
      filteredTasks = filteredTasks.filter((item) => item.completed);
    }
    if (filterWord.toLowerCase() === 'active') {
      filteredTasks = filteredTasks.filter((item) => !item.completed);
    }
    return filteredTasks;
  };

  updateCompleted = (index: number) => {
    this.todos[index].completed = !this.todos[index].completed;
  };

  addTask = (todo: Todo) => {
    this.todos.push(todo);
  };

  deleteTask = (index: number) => {
    this.todos.splice(index, 1);
  };

  clearCompleted = (): void => {
    this.todos = this.todos.filter((item) => !item.completed);
  };

  getTheme = (): boolean => {
    return this.darkMode;
  };

  toggleTheme = () => {
    this.darkMode = !this.darkMode;
  };
}
