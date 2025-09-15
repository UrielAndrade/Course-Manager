import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from 'src/features/courses/entities/course.entity.js';

@Injectable()
export class CoursesService {
  private courses: Course[] = [];
  private counter = 1;

  createCourse(createCourseInput: CreateCourseInput): Course {
    const newCourse: Course = { 
      id: this.counter++,
      ...createCourseInput,
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(updateCourseInput: UpdateCourseInput) {
    return `This action updates a #${UpdateCourseInput} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
