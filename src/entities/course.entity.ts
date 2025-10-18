import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from './tags.entity';
import { CascadesSubjectBuilder } from 'typeorm/persistence/subject-builder/CascadesSubjectBuilder.js';

@Entity(`courses`)
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.courses,
    { cascade: true })
  tags: Tag[];
}
