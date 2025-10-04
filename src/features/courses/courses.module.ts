import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { CoursesController } from 'src/features/courses/courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/features/courses/entities/course.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Course]) ],
  controllers: [CoursesController],
  providers: [CoursesResolver, CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
