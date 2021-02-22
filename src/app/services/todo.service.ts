import { Injectable } from '@angular/core';
import { Todo } from './../models/Todo';

@Injectable()
export class TodoService {
  private content: string;

  constructor() { 
    let todos = this.getTodos();

    this.content = 'test2'
  }

  public addTodo(completed:boolean): void {
    let todo = new Todo(this.content, completed) // What to put here?
    let todos = this.getTodos();
    todos.push(todo);

    this.setLocalStorageTodos(todos);
  }

  public getTodos(): Todo[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  public removeTodo(id: number): void {
    let todos = this.getTodos();
    todos = todos.filter((todo) => todo.id != id);

    this.setLocalStorageTodos(todos);
  }

  private setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
  }
}
