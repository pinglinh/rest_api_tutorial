const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");
//get a list of ninjas from the db
router.get("/ninjas", function(req, res, next) {
  res.send({ type: "GET" });
});

// add a new ninja to the db
// we receive a post request where someone is going to attach some JSON data
// to the body of that request
// that JSON data is going to represent a new ninja with these different properties: name, rank and availability
// once we receive it we're going to say ninja create - this is a mongoose method and this is the model so we're calling this create method on the model which is goijg to create a new instance of a ninja using the data that we receive from the body of the request
// it's going to save that datato the db for us and this is going to wait until the action is complete
// once it is, is going to research what the ninja has saved to the db
// then the function is going to fire with the response with that ninja
// this send back the JSON to the user - so that it knows everything has been successful
router.post("/ninjas", function(req, res, next) {
  Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
  }).catch(next);
});

// update a ninja in the db
router.put("/ninjas/:id", function(req, res, next) {
  res.send({ type: "PUT" });
});

// delete a ninja in the db
router.delete("/ninjas/:id", function(req, res, next) {
  res.send({ type: "DELETE" });
});

module.exports = router;
