import express from 'express';
import { addTemplateController, deleteTemplateController, getTemplatesController, sendThisEmailController } from '../controllers/emailController.js';


const router = express.Router();


router.post("/send-this-mail", sendThisEmailController);

router.post("/add-template", addTemplateController);

router.get("/get-all-templates", getTemplatesController);

router.delete("/delete-template", deleteTemplateController);

export default router;