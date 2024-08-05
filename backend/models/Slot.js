// models/Slot.js
import { Schema, model } from 'mongoose';

const slotSchema = new Schema({
  day: { type: String, required: true }, // e.g., "Monday", "Tuesday", etc.
  time: { type: String, required: true }, // e.g., "5pm-6pm", "6pm-7pm"
  isBooked: { type: Boolean, default: false },
  studentName: { type: String },
});

const Slot = model('Slot', slotSchema);

export default Slot;
