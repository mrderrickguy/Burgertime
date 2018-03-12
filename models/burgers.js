var orm = require("../config/orm.js");

var burger = {
	all: function(db) {
    orm.all("burgers", function(res) {
      db(res);
    });
  },
  
  create: function(cols, vals, db) {
    orm.create("burgers", cols, vals, function(res) {
      db(res);
    });
  },
  update: function(objColVals, condition, db) {
    orm.update("burgers", objColVals, condition, function(res) {
      db(res);
    });
  },
  delete: function(condition, db) {
    orm.delete("burgers", condition, function(res) {
      db(res);
    });
  }
};



module.exports = burgers;