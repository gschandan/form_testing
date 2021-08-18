/*
POST /api/project/submit
*/

const {projectSubmit} = require("../controllers/project.controller");

module.exports = function (app) {
    app.post(
        "/api/project/submit",
        projectSubmit
        )
    }
    
    
    
        //  res.header(
        //     "Access-Control-Allow-Headers",
        //     "x-access-token, Origin, Content-Type, Accept"
        //  )