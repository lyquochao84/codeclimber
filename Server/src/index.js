const express = require('express');

const app = express();
const PORT = 3001;

// Middlware
app.use(require("./app/middlewares/cors"));
app.use(require("./app/middlewares/logger"));

// Convert body to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server start on ${PORT}`);
})