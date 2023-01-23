import { ITodo } from "../interface/todo.interface";

export class Todo implements ITodo {
  constructor(
    public text: string,
    public completed: boolean = false,
  ) {}

}
