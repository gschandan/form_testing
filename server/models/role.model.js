const mongoose = require('mongoose');

const role = new mongoose.Schema({
        name: String,
})

const Role = mongoose.model('Role', role)

module.exports = Role;