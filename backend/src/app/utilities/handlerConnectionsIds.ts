export default {
  getSocketId(userId: number): string {
    return global.connectedClients[userId];
  },
  getUserId(socketId: string): number {
    const userId = Object.keys(global.connectedClients)
      .find((key: string) => global.connectedClients[key] === socketId);
    return parseInt(userId || '');
  },
  addNewConnection(userId: number, socketId: number): void {
    global.connectedClients = {
      ...global.connectedClients,
      [userId]: socketId
    };
  }
}