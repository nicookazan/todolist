import { TodoService } from '../../todo.service';
import { Component, Injectable, Input, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private TodoService:TodoService) {}

  ngOnInit(): void {
  }

  todo = this.TodoService.todo;

    removeTask(index: number) {
    this.TodoService.todo.splice(index,1);
  }

  onEditTask(index:number){
     console.log(index);
  }


}
