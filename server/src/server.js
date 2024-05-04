import path from 'node:path';
import express from 'express';
import 'dotenv/config';
import connectDB from '../config/db.config.js';
import router from '../routes/eventRoutes.js';

connectDB(); // call and run connectDB func

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve('client/dist')));
app.use(express.json());

app.use('/api', router); // direct requests with '/api' to router (see eventRoutes.js)

app.get('/', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'));
});

// Unknown/404 route handler
app.use('*', (req, res) => res.sendStatus(404).send('Page not found.'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
