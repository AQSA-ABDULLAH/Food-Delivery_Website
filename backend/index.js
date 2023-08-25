const express = require('express')
const app = express();
require("./db/connections");
const port = 5000;


// const cors = require("cors");
// app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})