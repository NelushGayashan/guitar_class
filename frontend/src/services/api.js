import axios from 'axios';

const API_URL = 'http://localhost:5000/api/slots';

export const getSlots = () => axios.get(API_URL);
export const createSlot = (slot) => axios.post(API_URL, slot);
export const bookSlot = (id, studentName) => axios.put(`${API_URL}/book/${id}`, { studentName });
