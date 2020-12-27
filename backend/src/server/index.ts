import 'reflect-metadata';
import Connection from '../database/connection';
import express from 'express';
import routes from "../routes/app.routes";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(routes);

server.listen(process.env.PORT, async () => {
  Connection.init()
    .then(() => console.log(`🤘  Database is connected`))
    .catch(error => console.log(`❌  Database connection error`, error));
  console.log(`🔥  Server is ready: PORT ${process.env.PORT}`);
});