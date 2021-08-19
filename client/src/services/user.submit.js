import axios from "axios";

const API_URL = "http://localhost:3000/api/project/submit/";

export const submit = (
    projectName,
    weekNumber,
    contributors,
    problemStatement,
    additionalInformation,
    githubUrl,
    techUsed,
    appDeploymentImage,
    appDeploymentUrl,
    additionalAppData) => {
        console.log ("I am here!!!")
  return axios.post(API_URL, {
    projectName,
    weekNumber,
    contributors,
    problemStatement,
    additionalInformation,
    githubUrl,
    techUsed,
    appDeploymentImage,
    appDeploymentUrl,
    additionalAppData
})
}