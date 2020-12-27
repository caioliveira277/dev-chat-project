import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateMessagesGroupsTable1608995791333 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'messages_groups',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true
        },
        {
          name: 'user_sender_id',
          type: 'int',
          comment: 'ID do usuário que enviou a mensagem ao grupo'
        },
        {
          name: 'group_id',
          type: 'int'
        },
        {
          name: 'message_id',
          type: 'int'
        },
        {
          name: 'send_date',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }));

    await queryRunner.createForeignKeys('messages_groups', [
      new TableForeignKey({
        name: 'fk_messages_groups_user_sender_id',
        columnNames: ['user_sender_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
      new TableForeignKey({
        name: 'fk_messages_groups_group_id',
        columnNames: ['group_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'groups'
      }),
      new TableForeignKey({
        name: 'fk_messages_groups_message_id',
        columnNames: ['message_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'messages'
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('messages_groups', 'fk_messages_groups_user_sender_id');
    await queryRunner.dropForeignKey('messages_groups', 'fk_messages_groups_group_id');
    await queryRunner.dropForeignKey('messages_groups', 'fk_messages_groups_message_id');
    await queryRunner.dropTable('messages_groups');
  }

}
