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
    githubUrl: {
        type:String,
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    linkedIn: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },
    youTube: {
        type: String,
        required: false
    },
    personalWebsite: {
        type: String,
        required: false
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