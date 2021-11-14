import { TodoService } from '../todo.service';
import { TodoComponent } from '../todo/todo.component';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  taskInput:string = "";

  constructor(private TodoService:TodoService) {
  }

  ngOnInit(): void {
  }

  onAddTask() {
    let todo1 = new Todo(this.taskInput);
    this.TodoService.addTask(todo1);

  }
}
