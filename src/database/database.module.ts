import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/features/courses/entities/course.entity';
import { DataSourceOptions } from 'typeorm';


export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'coursemanager',
  synchronize: true,
  logging: true, 
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...dataSourceOptions,
        }
      },
    }),
  ],
})
export class DatabaseModule { }
