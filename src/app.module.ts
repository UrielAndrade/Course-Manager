import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/features/users/users.module';
import { CoursesModule } from 'src/features/courses/courses.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [UsersModule, CoursesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
