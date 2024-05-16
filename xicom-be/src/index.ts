import express from 'express';
import http from 'http';
import useConnectDB from './configs/mongo.config';
import route from './routes';

const app = express();

const port = 4000;

const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(useConnectDB);

app.use(route);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
