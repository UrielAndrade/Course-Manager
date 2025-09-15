import { IsString } from "class-validator";

export class UpdateCourseInput {

  // @IsString()
  // readonly id?: number;
  
  @IsString()
  readonly title?: string;
  
  @IsString()
  readonly description?: string;
  
  @IsString({ each: true })
  tags?: string[];
}
