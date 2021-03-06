import { Request, Response } from 'express';
import { Group } from 'app/models/Group';
import { User } from 'app/models/User';
import { UserGroup } from 'app/models/UserGroup';
import { Exception } from 'app/utilities';

class GroupController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { group_id, user_id } = req.body;

      const group = await Group.findOne(group_id);
      if (!group) throw new Exception('Groupo não encontrado', 400);

      const user = await User.findOne(user_id);
      if (!user) throw new Exception('Usuário não encontrado', 400);

      const userGroupAssociationExists = await UserGroup.findOne({
        where: {group_id, user_id}
      });
      if(userGroupAssociationExists) throw new Exception('Usuário já cadastrado', 400);
      

      const userGroupAssociation = new UserGroup();
      userGroupAssociation.user = user;
      userGroupAssociation.group = group;
      await userGroupAssociation.save();

      return res.json(userGroupAssociation.id);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async findUserGroups(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params; 

      const userGroups = await UserGroup.find({
        select: ['group_id'],
        where: {
          user_id: id
        },
        relations: ['group'],
      });

      return res.json(userGroups);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async findGroupUsers(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params; 

      const groupUsers = await UserGroup.find({
        select: ['user_id'],
        where: {
          group_id: id
        },
        relations: ['user'],
      });

      return res.json(groupUsers);
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }

  public async delete(req: Request, res: Response): Promise<any> {
    try {
      const { group_id, user_id } = req.body;

      const userGroupAssociation = await UserGroup.findOne({ where: { group_id, user_id } });
      if (!userGroupAssociation) throw new Exception('Este usuário não pertence ao grupo selecionado', 400);

      const isDeleted = await userGroupAssociation.remove();
      if (!isDeleted) throw new Exception('Falha ao remover usuário do grupo', 500);

      return res.json({ message: 'Usuário removido do grupo com sucesso!' })
    } catch (error) {
      const { code, message } = Exception.interceptErrors(error);
      return res.status(code).json({ message })
    }
  }
}

export default new GroupController();