import formData from 'form-data';
import Mailgun from 'mailgun.js';
import express from 'express';
import mongoose from 'mongoose';
import emailTemplatesModel from '../models/emailtemplate.js'

export const sendEmailController = async (req, res) => {
    try {
        const mailgun = new Mailgun(formData);
        const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });
        console.log(process.env.MAILGUN_API_KEY)
        console.log('sending email...\n');
        mg.messages.create('sandbox4cc8e2f5a61c45048562bb634ac43ae3.mailgun.org', {
            from: "Excited User <mailgun@sandbox4cc8e2f5a61c45048562bb634ac43ae3.mailgun.org>",
            to: ["nishantgk2004@gmail.com"],
            subject: "Hello",
            text: "Testing some Mailgun awesomeness!",
            html: "<h1>Testing some Mailgun awesomeness!</h1>"
        })
            .then(msg => console.log(msg)) // logs response data
            .catch(err => console.log(err)); // logs any error
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.log(error)
        res.status(500).send('Email sending went wrong');
    }
}

export const sendThisEmailController = async (req, res) => {
    try {
        const mailgun = new Mailgun(formData);
        const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });
        console.log(process.env.MAILGUN_API_KEY)
        const { recepient, subject, body } = req.body;
        console.log('sending email...\n');
        mg.messages.create('sandbox4cc8e2f5a61c45048562bb634ac43ae3.mailgun.org', {
            from: "Excited User <mailgun@sandbox4cc8e2f5a61c45048562bb634ac43ae3.mailgun.org>",
            to: [recepient],
            subject: subject,
            text: body,
            html: `<h1>${body}</h1>`
        })
            .then(msg => console.log(msg)) // logs response data
            .catch(err => console.log(err)); // logs any error
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.log(error)
        res.status(500).send('Email sending went wrong');
    }
}

export const addTemplateController = async (req, res) => {
    try {
        const { subject, body } = req.body;
        const template = new emailTemplatesModel({ subject, body }).save();
        res.status(200).send({ template, message: 'Template added successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).send('Adding template went wrong');
    }
}

export const getTemplatesController = async (req, res) => {
    try {
        console.log('doing');
        const templates = await emailTemplatesModel.find({});
        res.status(200).send({
            templates, message: 'Templates retrieved'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Retrieving templates went wrong');
    }
}

export const deleteTemplateController = async (req, res) => {
    try {
        const { id } = req.body;
        const template = await emailTemplatesModel.findByIdAndDelete(id);
        res.status(200).send({
            template, message: 'Templates deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Deleting template went wrong');
    }
}
