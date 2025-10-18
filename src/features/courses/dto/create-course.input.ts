import { IsString } from "class-validator";
import { Tag } from "src/entities/tags.entity";
export class CreateCourseInput {

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
  
  @IsString({ each: true })
  readonly tags: string[];
}
