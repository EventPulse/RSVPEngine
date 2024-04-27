import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
  name: { type: String, required: true },
  response: { type: String },
});

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  location: { type: String },
  description: { type: String },
  attendees: [attendeeSchema],
});

// create schema for attendees within the eventSchema

export default mongoose.model('Event', eventSchema);
