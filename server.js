// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./config/database');
const userRoutes = require('./routes/userRoutes');

// Create an Express application
const app = express();

// enable all Cors Requests
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())


let settings = {
    app: app
}

require(__dirname+"/routes/userRoutes.js")(settings);
require(__dirname+"/routes/taskRoutes.js")(settings);

const port = 3000; // Set your desired port

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, this is the root route!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
