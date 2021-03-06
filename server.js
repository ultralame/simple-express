const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

const port = 3333;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
