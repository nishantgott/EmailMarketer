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
1. Setting Up the Server
   - Created a server using Express.
   - Registered on Mailgun, generated an API key, and configured it in the .env file.
2. Backend Development
   - Developed endpoints to send emails using the Mailgun API.
   - Created endpoints to manage email templates (create, delete, and edit).
   - Opted for MongoDB to store templates, campaigns, and analytics data.
3. Mailgun and Email Sending
   - Due to the limitation of the free Mailgun version, selected 4 authorized recipients for the demonstration.
   - Implemented functionality to send each template to all recipients upon clicking the launch button.
   - Automatically recorded each campaign in the analytics section, allowing for detailed viewing of campaign metrics.
4. Frontend Development
   - Built a React app for the frontend interface.
   - Integrated Chart.js to display bar graphs that compare the click and open rates of different templates within a campaign, providing insights into template performance.
5. Real-Time Updates
   - Utilized a webhook connected to the database for real-time updates when an email is opened or clicked.





















   

