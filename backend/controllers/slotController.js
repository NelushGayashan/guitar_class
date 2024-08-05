import Slot from '../models/Slot.js';

// Get all slots
const getSlots = async (req, res) => {
  try {
    const slots = await Slot.find();
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new slot
const createSlot = async (req, res) => {
  const { date, time } = req.body;

  try {
    const newSlot = new Slot({ date, time });
    const savedSlot = await newSlot.save();
    res.status(201).json(savedSlot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Book a slot
const bookSlot = async (req, res) => {
  const { id } = req.params;
  const { studentName } = req.body;

  try {
    const slot = await Slot.findById(id);

    if (!slot) {
      return res.status(404).json({ message: 'Slot not found' });
    }

    if (slot.isBooked) {
      return res.status(400).json({ message: 'Slot already booked' });
    }

    slot.isBooked = true;
    slot.studentName = studentName;
    const updatedSlot = await slot.save();

    res.json(updatedSlot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getSlots,
  createSlot,
  bookSlot,
};
