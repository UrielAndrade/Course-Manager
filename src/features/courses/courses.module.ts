import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { CoursesController } from 'src/features/courses/courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';
import { Tag } from 'src/entities/tags.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Course , Tag]) ],
  controllers: [CoursesController],
  providers: [CoursesResolver, CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
