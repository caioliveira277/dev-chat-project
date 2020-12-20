import { getConnectionManager, ConnectionManager, Connection } from "typeorm";
import config  from "../config/database";

export class Database {
  private connection: ConnectionManager;

  constructor() {
    this.connection = getConnectionManager();
  }

  private createConnection(): Connection {
    return this.connection.create(config);
  }

  public async connect(): Promise<Boolean> {
    return (await this.createConnection()
      .connect()).isConnected;
  }
}