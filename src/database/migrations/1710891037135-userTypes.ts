import { type MigrationInterface, type QueryRunner, Table } from 'typeorm';

import { userTypesSeeds } from '../seeds/users';

export class UserTypes1710891037135 implements MigrationInterface {
  private readonly table = new Table({
    name: 'userTypes',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'char',
        length: '63',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'description',
        type: 'text',
        isNullable: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(this.table.name, ['id', 'name', 'description'])
      .values(userTypesSeeds)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
