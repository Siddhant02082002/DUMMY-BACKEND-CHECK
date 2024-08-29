const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST request handler
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    // Respond back with a success message
    res.json({ message: 'Data received successfully', receivedData: data });
});

module.exports = app;
