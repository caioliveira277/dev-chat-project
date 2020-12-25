import 'reflect-metadata';
import '../database/connection';
import express from 'express';
import routes from "../routes/app.routes";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(routes);

server.listen(process.env.PORT, async () => {
  console.log(`🔥 Server is ready: PORT ${process.env.PORT}`);
});