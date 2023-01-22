import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('Um teste aqui', false),
    new Todo('Outro teste', true),
  ];

  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTdod(todo: Todo){
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
