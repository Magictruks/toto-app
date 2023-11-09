import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoDatabaseName, TodoSchema } from './entities/todo.entity';
import { TodoRepository } from './repositories/todo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TodoDatabaseName, schema: TodoSchema }]),
  ],
  exports: [TodoRepository],
  providers: [TodoRepository],
})
export class TodoRepositoryModule {}
