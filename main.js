const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Mijn naam is Thibo');
});

// Start server
app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
