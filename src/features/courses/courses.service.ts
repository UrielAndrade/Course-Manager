import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity.js';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ) { }

  async createCourse(createCourseInput: CreateCourseInput) {
    const course = this.courseRepository.create(createCourseInput);
    return this.courseRepository.save(course);
  }

  async findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOneBy({ id });
    if (!course) {
      throw new Error(`Course with ID ${id} not found`);
    }
    return course;
  }

  async update(id: number, updateCourseInput: UpdateCourseInput) {
    const course = await this.courseRepository.preload({
      ...updateCourseInput,
      id
    });
    if (!course) {
      throw new Error(`Course with ID ${id} not found`);
    }
    return this.courseRepository.save(course);
  }

  async remove(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id }
    })
    if (!course) {
      throw new Error(`Course with ID ${id} not found`);
    }
    return this.courseRepository.remove(course);
  };


}
