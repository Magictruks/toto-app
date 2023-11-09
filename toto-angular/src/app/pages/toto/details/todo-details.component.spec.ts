import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {TodoDetailsComponent} from "./todo-details.component";
import {ActivatedRoute, convertToParamMap} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BehaviorSubject, first} from "rxjs";
import {TodoService} from "../../../core/services/todo/todo.service";
import {FakeTodoService} from "../../../core/services/todo/fake-todo.service";


describe('TodoDetailsComponent', () => {
  let component: TodoDetailsComponent;
  let fixture: ComponentFixture<TodoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: new BehaviorSubject(convertToParamMap({ id: 1 })),
          }
        },
        {
          provide: TodoService, useClass: FakeTodoService
        }
      ]
    });
    fixture = TestBed.createComponent(TodoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should init data', () => {
    component.initData();
    expect(component.todo$).toBeTruthy();
  });

  it ('should have id 1', waitForAsync(() => {
    const todoService = TestBed.inject(TodoService);
    todoService.get('1').pipe(first()).subscribe(todo => {
      expect(todo.id).toBe(1);
    });
  }));
});
