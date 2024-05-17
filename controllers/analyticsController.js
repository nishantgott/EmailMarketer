import messageModel from "../models/messageModel.js";

export const getTotalController = async (req, res) => {
    try {
        const { name } = req.body;
        const count = await messageModel.countDocuments({ campaign_name: name });
        res.status(200).send({ message: "Success", count });
    } catch (error) {
        console.log(error);
        res.status(500).send('Getting total mails went wrong');
    }
}

export const getOpenController = async (req, res) => {
    try {
        const { name } = req.body;
        const count = await messageModel.countDocuments({ campaign_name: name, open: "yes" });
        res.status(200).send({ message: "Success", count });
    } catch (error) {
        console.log(error);
        res.status(500).send('Getting open mails went wrong');
    }
}

export const getClickController = async (req, res) => {
    try {
        const { name } = req.body;
        const count = await messageModel.countDocuments({ campaign_name: name, click: "yes" });
        res.status(200).send({ message: "Success", count });
    } catch (error) {
        console.log(error);
        res.status(500).send('Getting clicked mails went wrong');
    }
}

export const getCampaignTemplatesController = async (req, res) => {
    try {
        const { name } = req.body;
        const campaignTemplates = await messageModel.find({ campaign_name: name }).distinct('template');
        res.status(200).send({ message: "Success", campaignTemplates });
    } catch (error) {
        console.log(error);
        res.status(500).send('Getting campaign templates went wrong');
    }
}