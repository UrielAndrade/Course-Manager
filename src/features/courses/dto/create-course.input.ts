import { IsString } from "class-validator";

export class CreateCourseInput {
  // @IsString()
  // readonly id?: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
  
  @IsString({ each: true })
  readonly tags: string[];
}
