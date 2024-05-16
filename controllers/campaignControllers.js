import express from 'express';
import mongoose from 'mongoose';
import campaignModel from '../models/campaignsmodel.js';
import messageModel from '../models/messageModel.js';


export const addCampaignController = async (req, res) => {
    try {
        const { campaign_name } = req.body;
        const campaign = new campaignModel({ name: campaign_name }).save();
        res.status(200).send({ message: "Success", campaign });
    } catch (error) {
        console.log(error);
        res.status(500).send('Adding campaign went wrong');
    }
}

export const addMessageController = async (req, res) => {
    try {
        const { campaign_name, message_id, open, click, template } = req.body;
        const message = new messageModel().save({ campaign_name, message_id, open, click, template, template_name });
        res.status(200).send({ message: "Success", message });
    } catch (error) {
        console.log(error);
        res.status(500).send('Adding message went wrong');
    }
}