import SocketIO from 'socket.io';

const events = (socket: SocketIO.Socket) => {
  console.log(`[${socket.id}] 🚀 Client is connected`);

}

export default events;