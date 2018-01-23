const express = require("express");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");

// set up express app
const app = express();

// connect to mongoose
mongoose.connect("mongoodb://localhost/ninjago");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initalize routes
app.use("/api", require("./routes/api"));

// listen for request
app.listen(process.env.port || 4000, function() {
  console.log("now listening for request");
});
