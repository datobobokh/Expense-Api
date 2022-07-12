const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());

const routes = require('./routes');
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});