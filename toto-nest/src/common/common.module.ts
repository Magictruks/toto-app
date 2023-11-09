import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [],
  controllers: [],
  providers: [],
})
export class CommonModule {}
