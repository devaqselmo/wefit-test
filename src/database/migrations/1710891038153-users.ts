import {
  type MigrationInterface,
  type QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Users1710891038153 implements MigrationInterface {
  private readonly table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'type',
        type: 'int',
        default: 1,
        isNullable: false,
      },
      {
        name: 'name',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'document',
        type: 'varchar',
        length: '14',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'cnpj',
        type: 'varchar',
        length: '18',
        isNullable: true,
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '15',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'fax',
        type: 'varchar',
        length: '15',
        isNullable: true,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '127',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'zipCode',
        type: 'varchar',
        length: '15',
        isNullable: false,
      },
      {
        name: 'address',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'number',
        type: 'varchar',
        length: '15',
        isNullable: false,
      },
      {
        name: 'complement',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'district',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'city',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'state',
        type: 'char',
        length: '2',
        isNullable: false,
      },
      {
        name: 'createdAt',
        type: 'datetime',
        default: 'CURRENT_TIMESTAMP()',
      },
      {
        name: 'updatedAt',
        type: 'datetime',
        default: 'CURRENT_TIMESTAMP()',
        onUpdate: 'CURRENT_TIMESTAMP()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);

    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        name: 'userTypeFK',
        columnNames: ['type'],
        referencedColumnNames: ['id'],
        referencedTableName: 'userTypes',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
