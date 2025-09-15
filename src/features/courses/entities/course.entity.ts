import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Course {
  @Field(() => Int, 
  { description: 'Course ID' })
  id: number;

  @Field(()=> String ,
{description: 'Course Title' })
  title: string;

  @Field(() => String, 
  { description: 'course description' })
  description: string;

  @Field(()=> [String], 
  { description: 'Course Tags' })
  tags: string[];
}
