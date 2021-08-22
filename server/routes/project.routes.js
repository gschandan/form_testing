/*
POST /api/project/submit
GET /api/project/display
PUT /api/project/edit


get by user
get by tech
get by featured
get by cohort
get by week
*/

const {projectSubmit, projectDisplay, projectDisplayByTechUsed} = require("../controllers/project.controller");

module.exports = function (app) {
    app.post(
        "/api/project/submit",
        projectSubmit
        )
    }
        
module.exports = function (app) {
    app.get (
        "/api/project/display",
        projectDisplay
    )
}

module.exports = function (app) {
    app.get (
        "/api/project/get/:query/:searchText",
        projectDisplayByTechUsed
    )
}