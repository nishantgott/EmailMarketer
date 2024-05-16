import express from 'express';
import { addTemplateController, deleteTemplateController, getTemplatesController, sendEmailController, sendThisEmailController } from '../controllers/emailController.js';


const router = express.Router();

router.get("/send-mail", sendEmailController);

router.post("/send-this-mail", sendThisEmailController);

router.post("/add-template", addTemplateController);

router.get("/get-all-templates", getTemplatesController);

router.delete("/delete-template", deleteTemplateController);

export default router;