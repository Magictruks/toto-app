import { Module } from '@nestjs/common';
import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.controller';
import { TodoRepositoryModule } from './repository/todo.repository.module';

@Module({
  imports: [TodoRepositoryModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
