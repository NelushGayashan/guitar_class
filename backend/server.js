// server.js
import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Ensure file extension is included
import slotRoutes from './routes/slotRoutes.js'; // Ensure file extension is included

dotenv.config(); // Ensure dotenv is configured before using environment variables
connectDB();

const app = express();
app.use(json());
app.use('/api/slots', slotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

