import {NgModule} from '@angular/core';

import {TodoListComponent} from './list/todo-list.component';
import {TodoRoutingModule} from "./todo-routing.module";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TodoDetailsComponent} from "./details/todo-details.component";

@NgModule({
  imports: [TodoRoutingModule, NgForOf, AsyncPipe, NgIf],
  exports: [],
  declarations: [TodoListComponent, TodoDetailsComponent],
  providers: [],
})
export class TodoModule {
}
