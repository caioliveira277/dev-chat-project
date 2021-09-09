import SocketIO from 'socket.io';7

import { User } from 'app/models/User';
import { Message } from 'app/models/Message';
import { MessageGroup } from 'app/models/MessageGroup';

import UserGroupController from 'app/controllers/UserGroupController';
import UserController from 'app/controllers/UserController';
import MessageGroupController from 'app/controllers/MessageGroupController';

import { Exception, handlerConnectionsIds } from 'app/utilities';

function events (server: SocketIO.Server, socket: SocketIO.Socket) {
  console.log(`[${socket.id}] 🚀 Client is connected`);
  
  /* return error to client side */
  Exception.errorEmitter().on('requestError', (objReturn) => {
    server.to(socket.id).emit('requestError', objReturn);
  });

  /* get groups */
  socket.on('request-groups', async (userId: number) => {
    try {
      const groups = await UserGroupController.findUserGroups(userId);
      server.to(socket.id).emit('receive-groups', groups);
    } catch(_error){}
  });

  /* get available groups */
  socket.on('request-availableGroups', async () => {
    try {
      const groups = await UserGroupController.getAvailableGroupsAndUsers();
      server.to(socket.id).emit('receive-availableGroups', groups);
    } catch(_error){}
  });

  /* update user */
  socket.on('request-updateUser', async (data: User & {passwordConfirmation: String}) => {
    try {
      const user = await UserController.update(data);
      server.to(socket.id).emit('receive-updateUser', user);
    } catch(_error){}
  });

  /* send message */
  socket.on('request-sendMessage', async (data: Message & MessageGroup) => {
    try {
      const messageSent = await MessageGroupController.create(data);
      const groupUsers = await UserGroupController.getGroupUsers(data.group_id);

      groupUsers.forEach(({user_id}) => {
        const userSocketId = handlerConnectionsIds.getSocketId(user_id);
        if(userSocketId) {
          server.to(userSocketId).emit('receive-sendMessage', messageSent);
        }
      })
    } catch(_error){}
  });

  /* get group messages */
  socket.on('request-groupMessages', async (groupId: number) => {
    try {
      const userId = handlerConnectionsIds.getUserId(socket.id);
      
      const groupMessages = await MessageGroupController.getGroupMessages(groupId, userId);

      server.to(socket.id).emit('receive-groupMessages', groupMessages);

    } catch(_error){
      console.log(_error);
    }
  });
}


export default events;