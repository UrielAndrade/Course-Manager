import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from '../../entities/course.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/entities/tags.entity';
@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) { }


  async createCourse(createCourseInput: CreateCourseInput) {
    const tags = await Promise.all(
      createCourseInput.tags.map(name => this.preloadTagByName(name)),
    );
    const course = this.courseRepository.create({
      ...createCourseInput,
      tags,
    });
    return this.courseRepository.save(course);
  }


  async findAll() {
    return this.courseRepository.find({
      relations: ["tags"]
    });
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ["tags"]
    });

    if (!course) {
      throw new Error(`Course with ID ${id} not found`);
    }
    return course;
  }

  async update(id: number, updateCourseInput: UpdateCourseInput) {
    const tags = updateCourseInput.tags && await Promise.all(
      updateCourseInput.tags.map(name => this.preloadTagByName(name))
    );

    const course = await this.courseRepository.preload({
      ...updateCourseInput,
      id,
      tags,
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


  private async preloadTagByName(name: string): Promise<Tag> {

    const tag = await this.tagRepository.findOne({ where: { name } });

    if (tag) {
      return tag;
    }
    return this.tagRepository.create({ name });
  }

}
