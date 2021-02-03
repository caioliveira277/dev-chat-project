import 'reflect-metadata';
import Connection from '~/database/connection';
import express from 'express';
import routes from '~/routes/app.routes';
import http from 'http';
import path from 'path';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

const assetsPath = path.resolve(__dirname, '..', 'assets');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/assets', express.static(assetsPath));

server.listen(process.env.API_PORT, async () => {
  Connection.init()
    .then(() => console.log(`🤘  Database is connected`))
    .catch(error => console.log(`❌  Database connection error`, error));
  console.log(`🔥  Server is ready: PORT ${process.env.API_PORT}`);
});