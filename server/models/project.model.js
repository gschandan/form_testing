const mongoose = require('mongoose')

const project = new mongoose.Schema ({
    projectName: {
        type:String,
        required:true
    },
    weekNumber: {
        type:Number,
        required:true
    },
    contributors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    problemStatement: {
        type:String,
        required:true
    },
    additionalInformation: {
        type:String,
        required:true
    },
    githubUrl: {
        type:String,
        required: true,
        unique: true
    },
    techUsed: [{
        type:String,
        required:true
    }],
    appDeploymentData: {
        appImage:{
            type:String,
            required:true},
        appUrl: {
            type:String,
            required:true
        }
    },
    additionalData: [{
        additionalUrls: {
            type:String,
            required:false
        },
        additionalImages: {
            type:String,
            required:false
        }
    }]
})

const Project = mongoose.model("Project", project);

module.exports = Project;