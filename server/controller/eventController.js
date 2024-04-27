import Event from '../model/eventModel.js'; // import eventSchema from eventModel

const eventController = {};

eventController.createEvent = async (req, res, next) => {
  try {
    const newEvent = await Event.create({
      eventName: req.body.eventName,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      location: req.body.location,
      description: req.body.description,
    });

    const { _id: eventId } = newEvent;

    res.locals.eventId = { event: { eventId } }; // return URL upon event create

    return next();
  } catch (err) {
    return next({
      log: `eventController.createEvent: ERROR: ${err}`,
      status: 400,
      message: 'Error occurred in eventController.createEvent. Check server log for details',
    });
  }
};

export default eventController;
