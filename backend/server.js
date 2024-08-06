// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import slotRoutes from './routes/slotRoutes.js';

dotenv.config(); // Load environment variables from .env file

connectDB(); // Connect to the database

const app = express();
app.use(express.json()); // Parse JSON bodies

app.use('/api/slots', slotRoutes); // Use slot routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
