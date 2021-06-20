import { UserGroup } from 'app/models/UserGroup';
import { Exception } from 'app/utilities';

interface IAvailableGroupIds {
  [index: number]: number[]
}
class UserGroupController {
  public async findUserGroups(userId: number): Promise<UserGroup[]> {
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
      return []
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

  public async getAvailableGroupsAndUsers(): Promise<{groups: Omit<UserGroup, 'user'>[], participatingUserIds: IAvailableGroupIds}>{
    try {
      const groupsAndParticipantingUsers = await UserGroup.getGroupAndUsers();
      const availablesGroupsId: IAvailableGroupIds = {};
  
      const formatedGroups = groupsAndParticipantingUsers.filter((userGroup) => {
        if(!availablesGroupsId[userGroup.group_id]) {
          availablesGroupsId[userGroup.group_id] = [userGroup.user_id];
          return true
        } else {
          availablesGroupsId[userGroup.group_id].push(userGroup.user_id);
          return false;
        }
      });

      return {
        groups: formatedGroups,
        participatingUserIds: availablesGroupsId
      }
    } catch (error) {
      Exception.interceptErrors(error);
      return {groups: [], participatingUserIds: {}};
    }
  }
}


export default new UserGroupController();