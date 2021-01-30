import { Request, Response } from 'express';
import { Group } from 'app/models/Group';
import { User } from 'app/models/User';
import { Message } from 'app/models/Message';
import { MessageGroup } from 'app/models/MessageGroup';
import { Exception } from 'app/utilities';

class GroupController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { group_id, user_sender_id, body } = req.body;

      const group = await Group.findOne(group_id);
      const user = await User.findOne(user_sender_id);

      if (!group) throw new Exception('Groupo não encontrado', 400);
      if (!user) throw new Exception('Usuário não encontrado', 400);

      const messageToCreate = new Message();
      messageToCreate.body = body;
      messageToCreate.type = 'text';
      await messageToCreate.save();

      const messageGroupAssociation = new MessageGroup();
      messageGroupAssociation.user = user;
      messageGroupAssociation.group = group;
      messageGroupAssociation.message = messageToCreate;
      await messageGroupAssociation.save();

      return res.json(messageGroupAssociation.id);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
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
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }
}

export default new GroupController();