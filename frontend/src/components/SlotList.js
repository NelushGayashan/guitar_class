// src/components/SlotList.js
import React, { useEffect, useState } from 'react';
import { getSlots } from '../services/api';

const SlotList = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await getSlots();
        setSlots(response.data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };

    fetchSlots();
  }, []);

  return (
    <div>
      <h1>Available Slots</h1>
      <ul>
        {slots.map(slot => (
          <li key={slot._id}>{`${slot.date} - ${slot.time} ${slot.isBooked ? '(Booked)' : ''}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlotList;
