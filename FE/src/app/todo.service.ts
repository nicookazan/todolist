import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo[] = [];
  constructor() { }

  addTask(todo:Todo) {
/*     if(this.todo == null){
      this.todo=[];
    } */
    this.todo.push(todo);
    console.log(this.todo);
  }

  removeTask(){

  }

}
