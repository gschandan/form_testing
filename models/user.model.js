const mongoose = require('mongoose');
const User = mongoose.model(
    "User",
    new mongoose.Schema({
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
)

module.exports = User;