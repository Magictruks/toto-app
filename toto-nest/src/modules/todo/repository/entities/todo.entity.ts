import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateTodoDto } from '../../dto/create-todo.dto';
import { UpdateTodoDto } from '../../dto/update-todo.dto';

export type TodoDocument = HydratedDocument<Todo>;
export const TodoDatabaseName = 'todo';

@Schema()
export class Todo {
  @Prop({
    unique: true,
    required: true,
  })
  id: number;

  @Prop()
  title: string;

  @Prop()
  completed: boolean;

  @Prop()
  userId: number;

  static fromDocument(todoDocument: TodoDocument): Todo {
    if (!todoDocument) return null;
    const todo = new Todo();
    todo.id = todoDocument.id;
    todo.title = todoDocument.title;
    todo.completed = todoDocument.completed;
    todo.userId = todoDocument.userId;
    return todo;
  }

  static fromCreateDto(createTodoDto: CreateTodoDto): Todo {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.completed = createTodoDto.completed;
    todo.userId = createTodoDto.userId;
    return todo;
  }

  static fromUpdateDto(updateTodoDto: UpdateTodoDto): Todo {
    const todo = new Todo();
    todo.title = updateTodoDto.title;
    todo.completed = updateTodoDto.completed;
    todo.userId = updateTodoDto.userId;
    return todo;
  }
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
