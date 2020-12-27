import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUploadsTable1608991400998 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'uploads',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true
        },
        {
          name: 'filename',
          type: 'varchar'
        },
        {
          name: 'ext',
          type: 'varchar',
          comment: 'Extensão do arquivo'
        },
        {
          name: 'size',
          type: 'decimal'
        },
        {
          name: 'created_at',
          type: 'timestamp with time zone',
          default: 'now()'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('uploads');
  }

}
