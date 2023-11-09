import {Component, OnInit} from '@angular/core';
import {TodoInterface} from "../../../core/interfaces/todo.interface";
import {Observable} from "rxjs";
import {TodoService} from "../../../core/services/todo/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toto',
  templateUrl: 'todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos$: Observable<TodoInterface[]> = new Observable<TodoInterface[]>();
  constructor(private readonly todoService: TodoService, private router: Router) {
  }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    this.todos$ = this.todoService.list();
  }

    async goToDetails(id: number) {
        await this.router.navigate(['toto', 'details', id]);
  }
}
