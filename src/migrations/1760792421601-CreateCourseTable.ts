import { table } from "console";
import { Column, MigrationInterface, QueryRunner } from "typeorm";

export class CreateCourseTable1760792421601 implements MigrationInterface {

    private readonly tableName = 'courses';

    public async up(queryRunner: QueryRunner): Promise<void> {
        //usando UUIDs (string)
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable
            (new table(
                {
                    name: this.tableName,
                    Columns: [{
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CRUENT_TIMESTAMP',
                    }
                    ]
                }
            )
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
