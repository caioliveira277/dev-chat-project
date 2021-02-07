import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Group } from 'app/models/Group';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Group)
      .values([
        {
          name: 'Typescript',
          description: 'Grupo para falar sobre typescript e afins...',
          image: 'typescript.png',
          color: '#3075C0'
        },
        {
          name: 'HTML',
          description: 'Grupo para falar sobre HTML e afins...',
          image: 'html.png',
          color: '#E34F26'
        }
      ])
      .execute()
  }
}