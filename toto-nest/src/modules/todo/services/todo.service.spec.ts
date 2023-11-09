import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { TodoRepositoryModule } from '../repository/todo.repository.module';
import { CommonModule } from '../../../common/common.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, Model } from 'mongoose';
import {
  Todo,
  TodoDatabaseName,
  TodoSchema,
} from '../repository/entities/todo.entity';

describe('TodoService', () => {
  let service: TodoService;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let todoModel: Model<Todo>;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    todoModel = mongoConnection.model(TodoDatabaseName, TodoSchema);
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodoRepositoryModule, CommonModule],
      providers: [
        TodoService,
        {
          provide: TodoDatabaseName,
          useValue: todoModel,
        },
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  // afterAll(async () => {
  //   console.log('afterAll');
  //   await mongoConnection.dropDatabase();
  //   await mongoConnection.close();
  //   await mongod.stop();
  // });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('postTodo', () => {
    it('should create a todo', async () => {
      const todo = await service.create({
        title: 'title',
        completed: false,
        userId: 1,
      });
      expect(todo).toBeDefined();
      expect(todo.id).toEqual(1);
      expect(todo.title).toEqual('title');
      expect(todo.completed).toEqual(false);
      expect(todo.userId).toEqual(1);
    });
  });
});
