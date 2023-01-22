import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Todo } from './../../model/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoDataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.todoDataService.getAllTodos();
  }

  editTodo(){
    console.log('Editando');
  }

  deleteTodo(){
    console.log('Deletedo');
  }
}
