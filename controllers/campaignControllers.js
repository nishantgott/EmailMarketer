import express from 'express';
import mongoose from 'mongoose';
import campaignModel from '../models/campaignsmodel.js';


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