import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo('', false);

  @Output() todoClicked: EventEmitter<boolean> = new EventEmitter();

  @Output() editClicked: EventEmitter<any> = new EventEmitter();

  @Output() deleteClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.todo);
  }

  onTodoClicked(){
    this.todoClicked.emit();
    console.log("Emitindo evento onTodoClicked");
  }

  onEditClicked(){
    this.editClicked.emit();
    console.log('Editando');
  }

  onDeleteClicked(){
    this.deleteClicked.emit();
    console.log('Deletedo');
  }

}
