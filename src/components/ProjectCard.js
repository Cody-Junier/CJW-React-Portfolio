import React from "react";

export default function ProjectCard(props){
    let {project} = props

    return(
        <div className="project-card">
            <a className="pic" href={project.linkDeployed}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.alt} />
            </a>
            <p>{project.description}</p>
            <a href={project.linkGithub}>GitHub Repository</a>
        </div>
    )
}