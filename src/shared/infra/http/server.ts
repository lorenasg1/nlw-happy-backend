import 'reflect-metadata';

import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import '../typeorm/connection';
import routes from '@shared/infra/http/routes';
import errorHandler from '@shared/errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  '/uploads',
  express.static(path.join(__dirname, '..', '..', '..', '..', 'uploads'))
);
app.use(errorHandler);

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333!');
});
