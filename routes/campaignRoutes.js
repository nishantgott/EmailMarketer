import express from 'express';
import { addCampaignController } from '../controllers/campaignControllers.js';

const router = express.Router();

router.post('/add-campaign', addCampaignController);

export default router;