import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMessagesTable1608991175157 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'messages',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true
        },
        {
          name: 'body',
          type: 'varchar',
        },
        {
          name: 'type',
          type: 'enum',
          enum: ['text', 'attachment'],
          enumName: 'typeMessage',
          comment: 'Tipo da mensagem enviada'
        },
        {
          name: 'created_at',
          type: 'timestamp with time zone',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp with time zone',
          default: 'now()'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('messages');
  }

}
