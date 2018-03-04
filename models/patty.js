var orm = require("../config/orm.js");

var krabby = {
  selectAll: function (cb) {
    orm.selectAll("krabby", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("krabby", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("krabby", objColVals, condition, function(res) {
      cb(res);
    });
  } 
}

module.exports = krabby;