import express from 'express';
import { getCampaignTemplatesController, getClickController, getOpenController, getTotalController } from '../controllers/analyticsController.js';

const router = express.Router();

router.post('/get-total', getTotalController);

router.post('/get-open', getOpenController);

router.post('/get-click', getClickController);

router.post('/get-campaign-templates', getCampaignTemplatesController);

export default router;