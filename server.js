//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extend: true }));
app.use(express.static('public'));
app.use(express.json());

//Routes
require('./routes/apiRoutes')(app);
app.use('/', htmlRoutes);
// require('./routes/htmlRoutes')(app);

//Listening for port
app.listen(PORT, () =>
  console.log(`App is listening at http://localhost:${PORT}`)
);