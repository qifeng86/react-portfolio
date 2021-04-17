const express = require("express");


// App Config
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
