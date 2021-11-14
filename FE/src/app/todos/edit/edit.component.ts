import { TodoService } from './../../todo.service';
import { TodoComponent } from './../todo/todo.component';
import { Todo } from './../../todo.model';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  index: number = 0;
  taskInput: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private TodoService: TodoService
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
  }
  editTask() {
    this.TodoService.editTask(this.index, this.taskInput);
    this.router.navigate(['todos']);
  }
}
