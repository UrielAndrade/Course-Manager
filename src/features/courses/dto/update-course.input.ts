import { IsString } from "class-validator";
import { Tag } from "src/entities/tags.entity";
export class UpdateCourseInput {

  
  @IsString()
  readonly title?: string;
  
  @IsString()
  readonly description?: string;
  
  @IsString({ each: true })
  tags?: string[];
}
