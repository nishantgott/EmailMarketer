import express from 'express';
import { addCampaignController, addMessageController } from '../controllers/campaignControllers.js';

const router = express.Router();

router.post('/add-campaign', addCampaignController);

router.post('/add-message', addMessageController);

export default router;