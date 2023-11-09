import {Observable, of} from "rxjs";
import {TodoInterface} from "../../interfaces/todo.interface";

export class FakeTodoService {

  list(): Observable<TodoInterface[]> {
    const fakeTodos: TodoInterface[] = Array.from(Array(200).keys()).map((_, index) => ({
      id: index,
      userId: index,
      title: `title ${index}`,
      completed: false,
    }));

    return of(fakeTodos);
  }

  get(id: string): Observable<TodoInterface> {
    const fakeTodo: TodoInterface = {
      id: 1,
      userId: 1,
      title: `title 1`,
      completed: false,
    };

    return of(fakeTodo);
  }
}
