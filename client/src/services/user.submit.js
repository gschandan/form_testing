import axios from "axios";
import { API_URL } from "../config";

const PROJECT_SUBMIT_URL = API_URL + "project/submit/";

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
  return axios.post(PROJECT_SUBMIT_URL, {
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