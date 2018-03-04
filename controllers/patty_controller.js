var express = require("express");

var krabby = require("../models/patty.js");

var router = express.Router();

router.get("/", function(req, res) {
  krabby.all(function(data) {
    var hbsObject = {
      krabbys: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/krabby", function(req, res) {
  krabby.create([
    "patty_name", "devoured"
  ], [
    req.body.patty_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/krabbys/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  krabby.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;