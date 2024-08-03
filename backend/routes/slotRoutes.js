import { Router } from 'express';
import slotController from '../controllers/slotController.js'; // Import the default export

const { getSlots, createSlot, bookSlot } = slotController; // Destructure the functions from the default export

const router = Router();

router.get('/', getSlots);
router.post('/', createSlot);
router.put('/book/:id', bookSlot);

export default router;
