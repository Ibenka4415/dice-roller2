const express = require('express');
const app = express();

// Define a route for the dice roller
app.get('/roll', (req, res) => {
    // Generate a random number between 1 and 6
    const result = Math.floor(Math.random() * 6) + 1;
    res.send(`You rolled a ${result}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
