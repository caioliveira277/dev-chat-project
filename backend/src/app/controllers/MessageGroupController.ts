import { Group } from 'app/models/Group';
import { User } from 'app/models/User';
import { Message } from 'app/models/Message';
import { MessageGroup } from 'app/models/MessageGroup';
import { Exception } from 'app/utilities';
import UserGroupController from './UserGroupController';
import { getRepository } from 'typeorm';

class MessageGroupController {
  public async create({
    body,
    user_sender_id,
    group_id,
    type
  }: Message & MessageGroup): Promise<any> {
    try {
      const group = await Group.findOne(group_id);
      const user = await User.findOne(user_sender_id);

      if (!group) throw new Exception('Groupo não encontrado', 400);
      if (!user) throw new Exception('Usuário não encontrado', 400);

      const messageToCreate = new Message();
      messageToCreate.body = body;
      messageToCreate.type = type;
      await messageToCreate.save();

      const messageGroupAssociation = new MessageGroup();
      messageGroupAssociation.user = user;
      messageGroupAssociation.group = group;
      messageGroupAssociation.message = messageToCreate;
      await messageGroupAssociation.save();

      return messageGroupAssociation;
    } catch (error) {
      Exception.interceptErrors(error);
    }
  }

  public async getGroupMessages(group_id: number, user_id: number): Promise<any> {
    try {
      const group = await Group.findOne(group_id);
      const userIncluded = await UserGroupController.verifyUserIncluded(group_id, user_id);

      if (!group) throw new Exception('Groupo não encontrado', 400);
      if (!userIncluded) throw new Exception('O usuário não está nesse grupo', 400);

      const groupMessages = await MessageGroup.find({
        select: ['group_id'],
        where: {
          group_id
        },
        join: {
          alias: 'message',
          leftJoinAndSelect: {
            user: 'message.user'
          }
        },
        relations: ['message', 'user'],
      });
      
      return groupMessages;
    } catch (error) {
      Exception.interceptErrors(error);
    }
  }
}

export default new MessageGroupController();