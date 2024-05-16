import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const jsonPayload = req.body;
    const messageId = jsonPayload['event-data'].message.headers['message-id'];
    console.log(messageId);
    res.status(200).send('Event received');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
