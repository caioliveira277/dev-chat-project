import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateUsersGroupsTable1608992469323 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users_groups',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true
        },
        {
          name: 'user_id',
          type: 'int',
        },
        {
          name: 'group_id',
          type: 'int',
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

    await queryRunner.createForeignKeys('users_groups', [
      new TableForeignKey({
        name: 'fk_users_groups_user_id',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
      }),
      new TableForeignKey({
        name: 'fk_users_groups_group_id',
        columnNames: ['group_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'groups',
        onDelete: 'CASCADE'
      })
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users_groups', 'fk_users_groups_user_id');
    await queryRunner.dropForeignKey('users_groups', 'fk_users_groups_group_id');
    await queryRunner.dropTable('users_groups');
  }
}
