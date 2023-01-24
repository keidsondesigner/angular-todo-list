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

  onFormSubmit(form: NgForm): boolean | void {
    console.log('FORM ENVIADO');
    console.log('Form', form);

    if(form.invalid) {
      return this.showValidationErrors = true;
    }

    this.todoDataService.addTodo(new Todo(form.value.text));

    this.showValidationErrors = false;
    form.reset();
  }
}
