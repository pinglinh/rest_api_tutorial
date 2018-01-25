const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.port || 4000

// set up express app
const app = express();

// connect to mongoose
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

// static middleware
app.use(express.static("public"));

app.use(bodyParser.json());

// initalize routes
app.use("/api", require("./routes/api"));

// error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err._message });
});

// listen for request
app.listen(port, () => {
  console.log("now listening for request on " + port);
});
