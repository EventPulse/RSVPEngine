import express from 'express';
const router = express.Router();
import eventController from '../controller/eventController.js';

// const { createEvent } = eventController;
// const { getEvent } = eventController;
// const { postEvent } = eventController;
// import createEvent from '../controller/eventController.js';

// router.route('/create').post(createEvent); // start with creating event
// // router.route('/:id').get(getEvent)

// router.route('api/event').post(postEvent);

// router.route('api/event').get(getEvent);

router.get('/event/:eventId', eventController.getEvent, (req, res) =>
  res.status(200).send(res.locals.requestedEvent),
);

router.post('/event/:eventId', eventController.postEvent, (req, res) =>
  res.status(201).send(res.locals.requestedEvent),
);

router.post(
  '/create',
  eventController.createEvent,
  (req, res) => res.status(201).send(res.locals.eventId), // need to return unique URL link from clicking 'create' button
);

export default router;
