var connection = require("../config/connection.js");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
    // translate array of strings to a single comma-separated string
  return arr.toString();
}

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
    var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES ('" + vals + "')";
    // "INSERT INTO krabby (patty_name) VALUES ('Burger')"
    connection.query(queryString, function(err, result) {
      if (err) {
        console.log("table", table)
        console.log("cols", cols)
        console.log(vals)
        console.log("vals", vals.toString())
        console.log("sad")
        throw err;
      }
      cb(result)
    })
  },
  updateOne(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb (result)
    })
  },
  delete() {
    connection.query("DELETE FROM krabby WHERE (id= 3)", function(err, result) {
      if (err) {
        throw err;
      }

    })
  }
}
// orm.delete()
module.exports = orm;