import { EditComponent } from './todos/edit/edit.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './todos/form/form.component';

const routes: Routes = [
  {path: "", component:LoginComponent},
  {path: "edit/:id", component:EditComponent},
  {path: "todos", component:TodosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
