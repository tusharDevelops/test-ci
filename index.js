// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

console.log("hello jee")

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

