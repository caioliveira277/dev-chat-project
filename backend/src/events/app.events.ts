import SocketIO from 'socket.io';
import UserGroupController from 'app/controllers/UserGroupController';
import UserController from 'app/controllers/UserController';
import GroupController from 'app/controllers/GroupController';
import { User } from 'app/models/User';
import { Message } from 'app/models/Message';
import { Exception } from 'app/utilities';
import MessageGroupController from '~/app/controllers/MessageGroupController';
import { MessageGroup } from '~/app/models/MessageGroup';

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
      const groups = await GroupController.getAll();
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
        let userSocketId = global.connectedClients[user_id];
        if(userSocketId) {
          server.to(userSocketId).emit('receive-sendMessage', messageSent);
        }
      })
    } catch(_error){}
  });
}


export default events;