const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>this is home page api</h1>');
});

app.listen(8081, () => {
  console.log('listeing on port 8081');
});
