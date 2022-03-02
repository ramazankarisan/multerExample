const express = require('express');
const cors = require("cors")

const app = express();
app.use(cors())

const uploadRoutes = require('./routes/uploadRoutes')
app.use("/upload", uploadRoutes)

app.listen(3000, () => {
  console.log("server is listening!");
})