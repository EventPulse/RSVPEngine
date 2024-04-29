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
      attendees: req.body.attendeesArray,
    });
    console.log(newEvent);

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

eventController.getEvent = async (req, res, next) => {
  const { eventId } = req.params;
  console.log(eventId);

  //use the eventID to query the database
  //recieve back the entire event associated with the ID
  try {
    const requestedEvent = await Event.findOne({ _id: eventId });

    console.log('requested Event', requestedEvent);

    res.locals.requestedEvent = requestedEvent;

    console.log('res.locals', res.locals.requestedEvent);

    return next();
  } catch (err) {
    return next({
      log: `eventController.getEvent: ERROR: ${err}`,
      status: 400,
      message: 'Error occurred in eventController.getEvent. Check server log for details',
    });
  }
};

eventController.postEvent = async (req, res, next) => {
  const { eventId } = req.params;
  console.log(eventId);

  // create a new attendee response
  // receive object with name/attendance response
  // add that to attendees array inside Mongo

  // findOne event at the id
  // update that event (event.findOneAndUpdate) and reassign that attendee, and update res.locals

  try {
    const requestedEvent = await Event.findOne({ _id: eventId });

    console.log('requested Event', requestedEvent);

    res.locals.requestedEvent = requestedEvent;

    console.log('res.locals', res.locals.requestedEvent);

    return next();
  } catch (err) {
    return next({
      log: `eventController.postEvent: ERROR: ${err}`,
      status: 400,
      message: 'Error occurred in eventController.postEvent. Check server log for details',
    });
  }
};

// post request to add attendees to event, receive object with name/attendance status, add that to attendees array inside Mongo

// when 2nd form loads, GET request to populate the page, when person responds, POST request

// /api/event

// get request when we send..
// GET request > object with the event key and event id inside of it

export default eventController;
