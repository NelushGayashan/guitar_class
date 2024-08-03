import { Schema, model } from 'mongoose';

const slotSchema = new Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  studentName: { type: String },
});

const Slot = model('Slot', slotSchema);

export default Slot;
