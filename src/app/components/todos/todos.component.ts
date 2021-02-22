import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { TodoService } from './../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  public todoContent = '';

  inputTodo:string = ''

  constructor(private todoService: TodoService) {
    this.todoContent = '';
  }

  ngOnInit(): void {
    this.getTodos();
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    this.todoService.addTodo(this.todoContent);
  }

}
