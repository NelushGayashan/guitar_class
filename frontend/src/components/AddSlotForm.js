// src/components/AddSlotForm.js
import React, { useState } from 'react';
import { createSlot } from '../services/api';

const AddSlotForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSlot({ date, time });
      setDate('');
      setTime('');
      // Optionally refresh the slot list
    } catch (error) {
      console.error('Error creating slot:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <button type="submit">Add Slot</button>
    </form>
  );
};

export default AddSlotForm;
