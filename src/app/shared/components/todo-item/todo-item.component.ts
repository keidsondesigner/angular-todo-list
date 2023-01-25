import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.todos);
  }

  editTodo(){
    console.log('Editando');
  }

  deleteTodo(){
    console.log('Deletedo');
  }

}
