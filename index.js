const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

// Run-time configuration for port number (production) or 5000 (development)
const PORT = process.env.PORT || 5000;

app.listen(PORT);
