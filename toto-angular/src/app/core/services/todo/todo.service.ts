import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoInterface} from "../../interfaces/todo.interface";

@Injectable({ providedIn: "root" })
export class TodoService {

  constructor(private readonly http: HttpClient) {
  }

  list(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>('https://jsonplaceholder.typicode.com/todos');
  }

  get(id: string): Observable<TodoInterface> {
    return this.http.get<TodoInterface>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
