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
      return res.status(error.code).json({ message: error.message })
    }
  }

  public async findUserGroups(userId: number): Promise<any> {
    try {
      const userGroups = await UserGroup.find({
        select: ['group_id'],
        where: {
          user_id: userId
        },
        relations: ['group'],
      });
      
      return userGroups;
    } catch (error) {
      Exception.interceptErrors(error);
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
      return res.status(error.code).json({ message: error.message })
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
      return res.status(error.code).json({ message: error.message })
    }
  }

  public async getGroupUsers(groupId: number): Promise<UserGroup[]> {
    try {
      const groupUsers = await UserGroup.find({
        select: ['user_id'],
        where: {
          group_id: groupId
        },
      });
      
      return groupUsers;
    } catch (error) {
      Exception.interceptErrors(error);
      return []
    }
  }

  public async verifyUserIncluded(groupId: number, userId: number): Promise<boolean> {
    try {
      const userIncluded = await UserGroup.findOne({
        where: {
          group_id: groupId,
          user_id: userId
        }
      });

      if(userIncluded) {
        return true;
      }else {
        return false;
      }

    } catch (error) {
      Exception.interceptErrors(error);
      return false;
    }
  }
}

export default new GroupController();