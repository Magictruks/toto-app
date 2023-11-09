import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../../core/services/todo/todo.service";
import {ActivatedRoute} from "@angular/router";
import {TodoInterface} from "../../../core/interfaces/todo.interface";
import {debounceTime, filter, Observable, switchMap} from "rxjs";

@Component({
  selector: 'todo-details-component',
  templateUrl: 'todo-details.component.html'
})

export class TodoDetailsComponent implements OnInit {
  todo$: Observable<TodoInterface> = new Observable<TodoInterface>();
  constructor(
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    this.todo$ = this.route.paramMap.pipe(
      debounceTime(300),
      filter(params => params.has('id')),
      switchMap(params => this.todoService.get(params.get('id')!))
    );
  }
}
