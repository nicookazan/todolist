import { TodoService } from './../todo.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private TodoService:TodoService) {}

  ngOnInit(): void {
  }

  todo = this.TodoService.todo;

    removeTask(index: number) {
    /* this.todo = this.todo.filter(item=>item.i !== index); */
    this.TodoService.todo.splice(index,1);
  }

}
