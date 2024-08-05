// scripts/seedSlots.js
import mongoose from 'mongoose';
import Slot from '../models/Slot.js';

const seedSlots = async () => {
  await mongoose.connect('mongodb://localhost:27017/guitar_class_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['5pm-6pm', '6pm-7pm'];

  for (const day of days) {
    for (const time of times) {
      for (let i = 0; i < 5; i++) {
        await Slot.create({ day, time });
      }
    }
  }

  console.log('Slots seeded successfully');
  process.exit();
};

seedSlots();
