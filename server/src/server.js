import path from 'node:path';
import express from 'express';
import 'dotenv/config';
import connectDB from '../config/db.config.js';
import router from '../routes/eventRoutes.js';
// import eventController from '../controller/eventController.js';

connectDB(); // call and run connectDB func

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve('client/dist')));
app.use(express.json());

// lookup ES6 for this
// app.use('/api', require('./routes/eventRoutes.js'));
app.use('/api', router); // check with team: imported router (line 4) to direct requests from /api to router

// app.post(
//   '/api/create',
//   eventController.createEvent,
//   (req, res) => res.status(201).send(res.locals.eventId), // need to return unique URL link from clicking 'create' button
// );

app.get('/', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'));
});

// app.use('/api/event', router);

// app.get('/api/event/:eventId', eventController.getEvent, (req, res) =>
//   res.status(200).send(res.locals.requestedEvent),
// );

// app.post('api/event/:eventId', eventController.postEvent, (req, res) =>
//   res.status(201).send(res.locals.requestedEvent),
// );

// Unknown route handler
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
