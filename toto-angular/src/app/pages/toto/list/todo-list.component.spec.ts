import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoListComponent} from "./todo-list.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TodoService} from "../../../core/services/todo/todo.service";
import {FakeTodoService} from "../../../core/services/todo/fake-todo.service";


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [HttpClientTestingModule],
      providers: [{
        provide: TodoService, useClass: FakeTodoService
      }]
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should init data', () => {
    component.initData();
    expect(component.todos$).toBeTruthy();
  });
});
