const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Project = db.project;

const jwt = require("jsonwebtoken");

exports.projectSubmit = (req, res) => {
    const project = new Project ({
      projectName: req.body.projectName,
      weekNumber: req.body.weekNumber,
      contributors: req.body.contributors, //need to handle array on front end to pass through having been validated
      problemStatement: req.body.problemStatement,
      additionalInformation: req.body.additionalInformation,
      githubUrl: req.body.githubUrl,
      techUsed: req.body.techUsed,
      appDeploymentImage: req.body.appDeploymentImage,
      appDeploymentUrl: req.body.appDeploymentUrl,
      additionalAppData: req.body.additionalAppData
    }
    )

  project.save((err, project) => {
      if (err) {
        res.status(500).send({ message: err,
                                error: "Project with that GitHub URL already exists" });
        return;
      }
     res.status(200).send({ message: "Project successfully added!"});
     return;
    //   Project.find({ githubUrl: {$in: project.githubUrl}}).exec((err, project) => {
    //     if (err) {
    //       res.status(500).send({ message: err });
    //       return;
    //     }
    //     res.send(project);
    //     // if(project) {
    //     //     res.status(400).send({ message: "Project successfully added!"});
    //     //     return;
    //     // }
    //     // else {
    //     // res.send({message: "Project already exists in the database! "})
    //     //  }   
    //     })
    }
    )  
};

exports.projectFetch = () {
  const projectData = result.toJSON();
}