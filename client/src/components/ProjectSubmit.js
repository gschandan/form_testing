import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { isValidUrl } from "../lib/urlValidator";
import {isValidInput } from "../lib/isValidInput"
import {isRequiredInput} from "../lib/isRequiredInput"



import {submit} from "../services/user.submit";

export const SubmitProject = (props) => {

    const form = useRef();
    const submitButton = useRef();

    const [projectName, setProjectName] = useState("Enter Project Name");
    const [weekNumber,setWeekNumber] = useState (0);
    const [contributors, setContributors] = useState ([]);
    const [contributor, setContributor] = useState("")
    const [problemStatement, setProblemStatement] = useState ("Enter the project objective");
    const [additionalInformation, setAdditionalInformation] = useState ("Enter additional information about your project");
    const [githubUrl, setGithubUrl] = useState ("Enter GitHub Repo link");
    const [techUsed, setTechUsed] = useState(["github", "trello"]);
    const [appDeploymentImage, setAppDeploymentImage] = useState("");
    const [appDeploymentUrl, setAppDeploymentUrl] = useState("");
    const [additionalAppData, setAdditionalAppData] = useState([
        {additionalUrls: "url1", additionalImages: "image1"}
        ,
        {additionalUrls: "url2", additionalImages: "image2"}
    ]);

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const addContributorEmail = (e) => {
     e.preventDefault();
     if (isEmail(contributor)) {
         setContributors([...contributors, contributor])
     }
     else setContributor("invalid email address")
    }
    
    //TO FIX
    const removeContributorEmail = (e, i) => {
        e.preventDefault();
        if(i===0 && contributors.length >1) {
        setContributors([contributors.slice(i+1)])}
        else if(i===0 && contributors.length === 1) {
            setContributors([])
            }
        else {
            setContributors([contributors.slice(0,i), contributors.slice(i+1)])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        // if (submitButton.current.context._errors.length === 0) {
            submit(projectName,
                weekNumber,
                contributors,
                problemStatement,
                additionalInformation,
                githubUrl,
                techUsed,
                appDeploymentImage,
                appDeploymentUrl,
                additionalAppData)
                .then(                    
                (response) => {
                    setMessage(response.data.message);
                    console.log(response);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage = error.response
                    // (error.response &&
                    //   error.response.data &&
                    //   error.response.data.message) ||
                    // error.message ||
                    // error.toString();
        
                //   setMessage(resMessage);
                  console.log(resMessage)
                  setSuccessful(false);
                }
                )
        // }
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
                    {/* <ContributorInput contributorArray={contributorArray} setContributorArray={setContributorArray}></ContributorInput> */}
                    <div className="">
                        <label htmlFor="contributors">contributors</label>
                        <Input
                            type="text"
                            name="contributor"
                            placeholder="Add email addresses of all contributors, separated with a comma"
                             value={contributor}
                             onChange={(e) => setContributor(e.target.value)}
                            //  validations={[isRequiredInput]}
                            />
                        <button onClick={(e)=>addContributorEmail(e)}>+</button>
                        <ul>
                            {contributors.map ((item,i) => {
                                return (
                                <li key={i}>Contributor {i+1}: {item}
                                    <button onClick={(e, i)=>removeContributorEmail(e, i)}>-</button>
                                </li>
                                )
                            })}
    
                        </ul>
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
                            value={additionalInformation}
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
                            // value={techUsed}
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
                            // value={additionalAppData}
                            // onChange={(e)=> setAdditionalAppData(e.target.value)} // need a function
                            // validations={[isRequiredInput]}
                        />
                    </div>
{/*                              
                    <div>
                        <button onClick={} >Add Project</button>
                    </div> */}
                </div>
            )}
{/* 
                    {message && (
                    <div>
                            {message}
                    </div>
                )} */}
                <button onClick={handleSubmit} ref={submitButton}>Add your project</button>
            </Form>
        </div>
    )
}

