import { Router } from 'express';
import slotController from '../controllers/slotController.js';

const { getSlots, createSlot, bookSlot } = slotController;

const router = Router();

router.get('/', getSlots);
router.post('/', createSlot);
router.put('/book/:id', bookSlot);

export default router;
