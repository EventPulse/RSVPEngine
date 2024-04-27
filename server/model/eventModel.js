import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  location: { type: String },
  description: { type: String },
});

export default mongoose.model('Event', eventSchema);
