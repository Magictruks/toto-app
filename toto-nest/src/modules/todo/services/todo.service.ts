import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repository/repositories/todo.repository';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { Todo, TodoDocument } from '../repository/entities/todo.entity';
import { CreateTodoDao } from '../dao/create-todo.dao';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { UpdateTodoDao } from '../dao/update-todo.dao';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createTodoDao = new CreateTodoDao(createTodoDto);
    const todoDocument = await this.todoRepository.create(createTodoDao);
    return Todo.fromDocument(todoDocument);
  }

  async findAll(): Promise<Todo[]> {
    const todoDocuments: TodoDocument[] = await this.todoRepository.findAll();
    return todoDocuments.map((todoDocument) => Todo.fromDocument(todoDocument));
  }

  async findOne(id: number): Promise<Todo | null> {
    const todoDocument = await this.todoRepository.findOneById(id);
    return Todo.fromDocument(todoDocument);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo | null> {
    const updateTodoDao = new UpdateTodoDao(updateTodoDto);
    const updateDocument = await this.todoRepository.update(id, updateTodoDao);
    return Todo.fromDocument(updateDocument);
  }

  async remove(id: number): Promise<boolean> {
    const todoDocument = await this.todoRepository.remove(id);
    return !!todoDocument;
  }
}
