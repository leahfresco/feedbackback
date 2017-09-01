const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

// Port run-time configuration (production) or 5000 (development)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
