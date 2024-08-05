// SlotList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SlotList = () => {
  const [slots, setSlots] = useState([]);
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('5pm-6pm');

  useEffect(() => {
    const fetchSlots = async () => {
      const response = await axios.get('/api/slots', { params: { day, time } });
      setSlots(response.data);
    };

    fetchSlots();
  }, [day, time]);

  const handleBook = async (id) => {
    try {
      await axios.put(`/api/slots/book/${id}`, { studentName: 'John Doe' }); // Replace 'John Doe' with actual student name
      alert('Slot booked successfully');
      // Update slot list after booking
      const response = await axios.get('/api/slots', { params: { day, time } });
      setSlots(response.data);
    } catch (error) {
      alert('Error booking slot');
    }
  };

  return (
    <div>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        {/* Options for days */}
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        {/* Options for time slots */}
        {['5pm-6pm', '6pm-7pm'].map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <ul>
        {slots.map(slot => (
          <li key={slot._id}>
            {slot.time} - {slot.isBooked ? `Booked by ${slot.studentName}` : 'Available'}
            {!slot.isBooked && <button onClick={() => handleBook(slot._id)}>Book</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlotList;
