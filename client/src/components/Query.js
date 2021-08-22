
// import Axios from 'axios';
// import React, {useState, useEffect} from 'react';


// // async function projectQuery () {
// //     let response = await fetch (`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cws7p.mongodb.net/aztechUsers?retryWrites=true&w=majority`);
// //     let result = response.json()
// //     return result
// // }

// // let projectList = await projectQuery();

// // console.log(projectList);

// function ProjectData () {
//     const [data, setData] = useState([]);
//         useEffect(()=> {
//             debugger;
//             Axios
//             .get("http://localhost:3001/getData/")
//             .then(result =>setData(result.data));
//         })
// }

// this.state.data.map((data)=>{
// return(
//     <React.Fragment>
//         <p>{data.result}</p>
//     </React.Fragment>
// )
// }
// )

// let aztech
let projects

async function getDB (){
    // aztech = await conn.db(process.env.DATABASE)
    let data = await fetch (`http://localhost:3000/api/project/`)
    // .collection("projects")
    projects = await data.json();
}

getDB();
// return projects

export const ProjectsList = () => {

    return (
        <ul> {projects.map((item)=> {
                return (
                 <li>{projects.projectname}</li>
                  )
            })}
       </ul>
    )  
}

