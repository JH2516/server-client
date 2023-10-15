const express = require('express');
const app = express();
const port = 3000;

app.get('/hi', (req, res) => {
    const responseData = { message: 'Hello from Server!' };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
