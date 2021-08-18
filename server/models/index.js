const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db={};
db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.project = require("./project.model");
db.ROLES = ["admin", "user"];

module.exports = db;