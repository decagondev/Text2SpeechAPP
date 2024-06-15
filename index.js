const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4444;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/submit', (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({ message: "submitted"}), 200;
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));