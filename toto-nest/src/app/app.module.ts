import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from '../modules/modules.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [ModulesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
