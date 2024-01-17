// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // Set your desired port

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, this is the root route!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
