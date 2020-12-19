import express from 'express';
import bodyParser from 'body-parser';
import routes from "../routes/app.routes";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

server.listen(process.env.PORT, () => {
  console.log(`Server is ready: PORT ${process.env.PORT}`);
});