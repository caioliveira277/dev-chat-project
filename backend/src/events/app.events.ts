import SocketIO from 'socket.io';
import UserGroupController from 'app/controllers/UserGroupController';
import UserController from 'app/controllers/UserController';
import { User } from 'app/models/User';

function events (this: SocketIO.Server, socket: SocketIO.Socket) {
  console.log(`[${socket.id}] 🚀 Client is connected`);

  /* get chats */
  socket.on('request-groups', async (userId: number) => {
    const groups = await UserGroupController.findUserGroups(userId);
    this.to(socket.id).emit('receive-groups', groups);
  });

  /* update user */
  socket.on('request-updateUser', async (data: User & {passwordConfirmation: String}) => {
    const user = await UserController.update(data);
    this.to(socket.id).emit('receive-updateUser', user);
  });
}


export default events;