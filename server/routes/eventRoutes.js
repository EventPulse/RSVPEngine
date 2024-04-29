import express from 'express';
const router = express.Router();
import eventController from '../controller/eventController.js';

const { createEvent } = eventController;
const { getEvent } = eventController;
const { postEvent } = eventController;
// import createEvent from '../controller/eventController.js';

router.route('/create').post(createEvent); // start with creating event
// router.route('/:id').get(getEvent)

router.route('/event').post(postEvent);

router.route('api/event').get(getEvent);

export default router;
