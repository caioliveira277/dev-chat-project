import { Request, Response } from 'express';
import { Group } from 'app/models/Group';
import { User } from 'app/models/User';
import { Message } from 'app/models/Message';
import { MessageGroup } from 'app/models/MessageGroup';
import { Exception } from 'app/utilities';

class GroupController {
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

      messageGroupAssociation.user.password = '';
      return messageGroupAssociation;
    } catch (error) {
      Exception.interceptErrors(error);
    }
  }

  public async findGroupMessages(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;

      const groupMessages = await MessageGroup.find({
        select: ['message_id'],
        where: {
          group_id: id
        },
        relations: ['message'],
      });

      return res.json(groupMessages);
    } catch (error) {
      return res.status(error.code).json({ message: error.message })
    }
  }
}

export default new GroupController();