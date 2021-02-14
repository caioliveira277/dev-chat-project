import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColorGroupTable1612657727191 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'groups',
			new TableColumn({
				name: 'color',
				type: 'varchar',
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('groups', 'color');
	}

}
