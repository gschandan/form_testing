import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Checkbox from "react-validation/build/checkbox";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { isValidUrl } from "../lib/urlValidator";
import {isValidInput } from "../lib/isValidInput"
import {isRequiredInput} from "../lib/isRequiredInput"


import {submit} from "../services/user.submit";

const SubmitProject = (props) => {

    const form = useRef();
    const submitButton = useRef();

    const [projectName, setProjectName] = useState("Enter Project Name");
    const [weekNumber,setWeekNumber] = useState (0);
    const [contributors, setContributors] = useState ([]);
    const [problemStatement, setProblemStatement] = useState ("Enter the project objective");
    const [additionalInformation, setAdditionalInformation] = useState ("Enter additional information about your project");
    const [githubUrl, setGithubUrl] = useState ("Enter GitHub Repo link");
    const [techUsed, setTechUsed] = useState(["github", "trello"]);
    const [appDeploymentImage, setAppDeploymentImage] = useState("");
    const [appDeploymentUrl, setAppDeploymentUrl] = useState("");
    const [additionalAppData, setAdditionalAppData] = useState([
        {additionalUrls: "url1", additionalImages: "image1"},
        {additionalUrls: "url2", additionalImages: "image2"}]);

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const handleAddContributor = (e) => {
        const contributorData = e.target.value;
        const contributorArray = contributorData.split(",");
        setContributors(contributorArray)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (submitButton.current.context._errors.length === 0) {
            submit(projectName,
                weekNumber,
                contributors,
                problemStatement,
                additionalInformation,
                githubUrl,
                techUsed,
                appDeploymentData,
                additionalAppData)
                .then(                    
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
        
                  setMessage(resMessage);
                  setSuccessful(false);
                }
                )
        }
    }
    return (
        <div >
            <Form onSubmit={handleSubmit} ref={form}>
            {!successful && (
                <div>
                    <div className="">
                        <label htmlFor="projectName">projectName</label>
                        <Input
                            type="text"
                            name="projectName"
                            value={projectName}
                            onChange={(e)=> setProjectName(e.target.value)}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="weekNumber">weekNumber</label>
                        <Input
                            type="number"
                            name="weekNumber"
                            value={weekNumber}
                            onChange={(e)=> setWeekNumber(e.target.value)}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="contributors">contributors</label>
                        <Input
                            type="text"
                            name="contributors"
                            placeholder="Add email addresses of all contributors, separated with a comma"
                            value={contributors}
                            onBlur={handleAddContributor}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="problemStatement">problemStatement</label>
                        <Input
                            type="text"
                            name="problemStatement"
                            value={problemStatement}
                            onChange={(e)=> setProblemStatement(e.target.value)}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="additionalInformation">additionalInformation</label>
                        <Input
                            type="text"
                            name="additionalInformation"
                            value={projectName}
                            onChange={(e)=> setAdditionalInformation(e.target.value)}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="githubUrl">githubUrl</label>
                        <Input
                            type="text"
                            name="githubUrl"
                            value={githubUrl}
                            onChange={(e)=> setGithubUrl(e.target.value)}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="techUsed">techUsed</label>
                        <Input // need a separate component that maps through tech array and creates checkbox for each
                            type="checkbox"
                            name="techUsed"
                            value={techUsed}
                            // onChange={}
                            // validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="appDeploymentImage">appDeploymentImage</label>
                        <Input
                            type="text"
                            name="appDeploymentImage"
                            value={appDeploymentImage}
                            onChange={(e)=> setAppDeploymentImage(e.target.value)}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="appDeploymentUrl">appDeploymentUrl</label>
                        <Input
                            type="text"
                            name="appDeploymentUrl"
                            value={appDeploymentUrl}
                            onChange={(e)=> setAppDeploymentUrl(e.target.value)}
                            validations={[isRequiredInput]}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="additionalAppData">additionalAppData</label>
                        <Input
                            type="text"
                            name="additionalAppData"
                            value={additionalAppData}
                            // onChange={(e)=> setAdditionalAppData(e.target.value)} // need a function
                            validations={[isRequiredInput]}
                        />
                    </div>          
                </div>)}
            </Form>
        </div>
    )
}

