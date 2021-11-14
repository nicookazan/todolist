import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo[] = [];
  constructor() { }

  addTask(todo:Todo) {
    this.todo.push(todo);
    console.log(this.todo);
  }

  editTask(id:number,task:string){
    this.todo[id].name = task;
  }


}
