import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./list/todo-list.component";
import {TodoDetailsComponent} from "./details/todo-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TodoListComponent },
  { path: 'details/:id', component: TodoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
