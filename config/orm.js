var connection = require("../config/connection.js");




var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    })
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + " (" +cols.toString() + ") VALUES (" + vals + ")";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
    })
  },
  updateOne(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET " + objColVals + " WHERE " + condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb (result)
    })
  }
}
module.exports = orm;