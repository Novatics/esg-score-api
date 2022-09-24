import express from 'express';
import core from './src/modules/core';
import serverConfig from './src/configs/server.config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', core.router);

app.listen(serverConfig.port, () => {
  console.log(`Listening to port ${serverConfig.port}`);
});