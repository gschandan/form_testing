import instance from "./api.interceptor"

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
  return instance.post("project/submit/", {
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