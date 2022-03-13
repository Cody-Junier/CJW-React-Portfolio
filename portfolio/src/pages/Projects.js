import React from "react";
import ProjectCard from "../components/ProjectCard";
import './Projects.css'


export default function Projects(){
    const projectArray = [
        {
            title: '1',
            image: './logo192.png',
            alt:'',
            linkDeployed: 'https://cody-junier.github.io/Portfoliomk2/',
            linkGithub:'https://cody-junier.github.io/Portfoliomk2/',
            description:'blablalbalblalbalblalbalb',
            tech:''
        },
        {
            title: '2',
            image: '',
            alt:'',
            linkDeployed: '',
            linkGithub:'',
            description:'',
            tech:''
        },
        {
            title: '3',
            image: '',
            alt:'',
            linkDeployed: '',
            linkGithub:'',
            description:'',
            tech:''
        },
        {
            title: '4',
            image: '',
            alt:'',
            linkDeployed: '',
            linkGithub:'',
            description:'',
            tech:''
        },
        {
            title: '5',
            image: '',
            alt:'',
            linkDeployed: '',
            linkGithub:'',
            description:'',
            tech:''
        },
        {
            title: '6',
            image: '',
            alt:'',
            linkDeployed: '',
            linkGithub:'',
            description:'',
            tech:''
        }]
    return(
        <div id="projectPage">
            {projectArray.map((project, index)=>(
                <ProjectCard key={index} project = {project}></ProjectCard>
            ))}
        </div>
    )
}