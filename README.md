# EmailMarketer 

## Install dependencies

Run:
```bash
npm install
```
to install all dependencies listed in the package.json file


## Run the application
```bash
npm run dev
```

## Set up Environment variables
1. MONGO_URL
2. MAILGUN_API_KEY
3. MAILGUN_DOMAIN

## Overview
1. In the HomePage, You can create multiple email templates and store them in the database. You can also add and delete them.
2. In the Campaign page, you can select the recepients, users and launch campaign.
3. In the Analytics page, for each campaign, you can track:
   - Total mails sent
   - Open rate
   - Click rate
   - Templates used
   - Number of open/clicked mails for each template
     This helps you understand the efficiency of each template
4. Using webhooks, the analytics page is updated in real time, as an email is opened or clicked.


## Approach
1. Using express, I created a server. After creating an account on mailgun, I created an API key and set it up in my .env file
2. Created backend for sending mails through mailgun API
3. Created backend for creating, deleting and editing email templates
4. Decided to use MongoDB for storing all my templates, campaigns, and analytics information  
5. I chose 4 users, as the free version of Mailgun is only limited to 4 authorized recepients
6. Once the launch button is clicked, each template is sent to every recipient
7. The campaign is automatically added to the analytics page where details about every campaign can be viewed
8. Created a react app and developed frontend
9. Used Chart.JS to display bar graphs comparing the click rates and open rates of different templates in a campaign. This will help user understand which template is better
10. Used a webhook and connected it to my database, allowing real time updates to when an email is clicked
   

