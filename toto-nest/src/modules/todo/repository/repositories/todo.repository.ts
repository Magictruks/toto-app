import { Injectable } from '@nestjs/common';
import { CreateTodoDao } from '../../dao/create-todo.dao';
import { InjectConnection } from '@nestjs/mongoose';
import { Todo, TodoDatabaseName, TodoDocument } from '../entities/todo.entity';
import { Connection, Model, Types } from 'mongoose';

@Injectable()
export class TodoRepository {
  constructor(@InjectConnection() private connection: Connection) {}

  get model(): Model<Todo> {
    return this.connection.model(TodoDatabaseName);
  }

  async create(createTodoDto: CreateTodoDao): Promise<TodoDocument> {
    try {
      const createdTodo = new this.model(createTodoDto);
      return createdTodo.save();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async findAll(): Promise<TodoDocument[]> {
    try {
      return this.model.find().exec();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async findOneById(id: number): Promise<TodoDocument> | null {
    try {
      return this.model.findById(new Types.ObjectId(id)).exec();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async update(
    id: number,
    updateTodoDto: CreateTodoDao,
  ): Promise<TodoDocument> | null {
    try {
      return this.model.findByIdAndUpdate(
        new Types.ObjectId(id),
        updateTodoDto,
        {
          new: true,
        },
      );
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async remove(id: number): Promise<TodoDocument> | null {
    try {
      return this.model.findByIdAndRemove(new Types.ObjectId(id)).exec();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
