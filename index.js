const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Example endpoints
app.get('/api/users', (req, res) => {
  res.send([{ id: 1, name: 'John Doe' }]);
});

app.post('/api/users', (req, res) => {
  res.status(201).send(req.body);
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
