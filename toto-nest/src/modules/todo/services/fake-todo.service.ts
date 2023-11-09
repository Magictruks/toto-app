import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo } from '../repository/entities/todo.entity';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class FakeTodoService {
  constructor() {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return Todo.fromCreateDto(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    const todoDtos = Array.from(Array(10).keys()).map((i) => {
      const todo = new Todo();
      todo.title = `title ${i}`;
      todo.completed = i % 2 === 0;
      todo.userId = i;
      return todo;
    });
    return todoDtos.map((todo) => Todo.fromCreateDto(todo));
  }

  async findOne(id: number): Promise<Todo | null> {
    const todo = new Todo();
    todo.id = id;
    todo.title = `title ${id}`;
    todo.completed = id % 2 === 0;
    todo.userId = id;
    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo | null> {
    return Todo.fromUpdateDto(updateTodoDto);
  }

  async remove(id: number): Promise<boolean> {
    return true;
  }
}
