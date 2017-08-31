const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// Port run-time configuration (production) or 5000 (development)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
