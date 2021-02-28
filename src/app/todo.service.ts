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
      id: 1,
    },
    {
      task: 'Jog around the park 3x',
      completed: false,
      id: 2,
    },
    {
      task: '10 minutes meditation',
      completed: false,
      id: 3,
    },
    {
      task: 'Read for 1 hour',
      completed: false,
      id: 4,
    },
    {
      task: 'Pick up groceries',
      completed: false,
      id: 5,
    },
    {
      task: 'Complete Todo App on Frontend Mentor',
      completed: false,
      id: 6,
    },
  ];
  nextId: number = 7;
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

  updateCompleted = (todo: Todo) => {
    let todoId: number = todo.id;
    let index: number = this.todos.findIndex((item) => item.id === todoId);
    this.todos[index].completed = !this.todos[index].completed;
  };

  addTask = (todo: Todo) => {
    todo.id = this.nextId++;
    this.todos.push(todo);
  };

  deleteTask = (todo: Todo) => {
    let todoId: number = todo.id;
    let index: number = this.todos.findIndex((item) => item.id === todoId);
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
