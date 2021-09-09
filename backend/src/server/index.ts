import 'reflect-metadata';
import Connection from '~/database/connection';
import express from "express";
import http from 'http';
import routes from '~/routes/app.routes';
import AuthMiddleware from 'app/middlewares/authMiddleware'; 
import events from '~/events/app.events';
import cors from 'cors';
import path from 'path';
import * as socketIO from 'socket.io';

class ServerApplication {
  private app: express.Express;
  private httpServer: http.Server;
  private ioServer: socketIO.Server;
  private PORT = process.env.API_PORT;
  private ioConnectionParms = {
    cors: {
      origin: process.env.SITE_BASE_URL,
      methods: ['GET', 'POST'],
      allowedHeaders: ['authorization'], 
    }
  }

  constructor() {
    this.initApp();
    this.initServer();
    this.initSocketIo();
  }

  private initApp(): void {
    this.app = express();

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(routes);
    this.app.use('/assets', express.static(
      path.resolve(__dirname, '..', 'assets')
    ));
  }

  private initSocketIo(): void {
    this.ioServer = new socketIO.Server(this.httpServer, this.ioConnectionParms);
    this.ioServer.use(AuthMiddleware.authSocket);
    this.ioServer.on('connection', (socket) => events(this.ioServer, socket));
  }

  private initServer(): void {
    this.httpServer = http.createServer(this.app);

    this.httpServer.listen(this.PORT, async () => {
      Connection.init()
        .then(() => console.log(`🤘  Database is connected`))
        .catch(error => console.log(`❌  Database connection error`, error));
      console.log(`🔥  Server is ready: PORT ${process.env.API_PORT}`);
    });
  }
}

new ServerApplication();