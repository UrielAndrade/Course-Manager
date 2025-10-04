import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService){}
  
  @Post()
  create(@Body() createCourseInput: CreateCourseInput) {
    return this.coursesService.createCourse(createCourseInput);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseInput: CreateCourseInput) {
    return this.coursesService.update(+id, updateCourseInput);
  }
}
