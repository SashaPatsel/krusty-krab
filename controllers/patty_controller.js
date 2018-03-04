var express = require("express");

var krabby = require("../models/patty.js");

var router = express.Router();

router.get("/", function(req, res) {
  krabby.selectAll(function(data) {
    var hbsObject = {
      krabby: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/krabby", function(req, res) {
  krabby.insertOne(
    "patty_name", req.body.patty_name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/krabby/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  krabby.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;