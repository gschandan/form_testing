const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userName: {
        type:String,
        required: true,
        unique: true
    },
    displayName: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ]
    }
)

const User = mongoose.model("User", user)

module.exports = User;