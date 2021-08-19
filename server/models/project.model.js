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
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User"
        type:String,
        required:true
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

// {
//     "projectName": "project1",
//  "weekNumber": 1,
//  "contributors": ["a", "b"],
//  "problemStatement": "life is hard" ,
//  "additionalInformation": "and it just gets harder" ,
//  "githubUrl": "changeyourlife.com",
//  "techUsed": ["mindfulness" , "alcohol"],
//  "appDeploymentData": {
//                                        "appImage": "random string",
//                                        "appUrl": "another random string" 		
//            } ,
// "additionalData": [{
//     "additionalImages": "random string1",
//     "additionalUrls": "another random string1" 		
// } ,{
//     "additionalImages": "random string2",
//     "additionalUrls": "another random string2" 		
// } ,{
//     "additionalImages": "random string3",
//     "additionalUrls": "another random string3" 		
// } ]
// }