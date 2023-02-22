import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Todo } from './../../model/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  showValidationErrors: boolean = false;

  constructor(private _todoDataService: DataService) { }

  ngOnInit(): void {
    this.todos = this._todoDataService.getAllTodos();
  }


  onFormSubmit(form: NgForm): boolean | void {
    console.log('FORM ENVIADO');
    console.log('Form', form);

    if(form.invalid) {
      return this.showValidationErrors = true;
    }

    this._todoDataService.addTodo(new Todo(form.value.text));

    this.showValidationErrors = false;
    form.reset();
  }

  toggleCompletedTodo(todo: Todo) {
    todo.completed = !todo.completed;
    console.log("toggleCompletedTodo clicado!!!");
  }

  editTodo(todo: Todo) {
    // pegando o index de cada todo do array de todos;
    const index = this.todos.indexOf(todo);
    // this._todoDataService.updateTodo()
  }

  deleteTodo(todo: Todo){

  }
}
