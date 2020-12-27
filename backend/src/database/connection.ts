import { createConnection } from 'typeorm';

class Connection {
  public async init():Promise<Object> {
    return await createConnection();
  }
}

export default new Connection();