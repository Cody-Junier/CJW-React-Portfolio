import React from "react";
import ProjectCard from "../components/ProjectCard";
import good from '../utils/images/Twitter-Api.PNG'
import devspark from '../utils/images/devspark.png'
import movie from '../utils/images/moviefetch.png'
import shop from '../utils/images/shop.png'
import note from '../utils/images/niftynotes.png'
import weather from '../utils/images/whereweather.png'

export default function Projects(){
    const projectArray = [
        {
            title: 'Twitter-Mock-Java-API',
            image: good,
            alt:'a view of twitter-mock data in PGAdmin',
            linkDeployed: 'https://github.com/Cody-Junier/Twitter-Mock-Java-API',
            linkGithub:'https://github.com/Cody-Junier/Twitter-Mock-Java-API',
            description:'Team project: An implementation of a Twitter-like API using Java and Spring-Boot',
            tech:''
        },
        {
            title: 'devSpark',
            image: devspark,
            alt:'homepage for dev spark',
            linkDeployed: 'https://devsparkio.herokuapp.com/',
            linkGithub:'https://github.com/branjames117/devspark',
            description:'A social media dating app by and for developers.',
            tech:''
        },
        {
            title: 'Movie Fetch',
            image: movie,
            alt:'homepage for movie fetch',
            linkDeployed: 'https://nicholasconradholzer.github.io/fgdp-GitQuotes/',
            linkGithub:'https://github.com/NicholasConradHolzer/fgdp-GitQuotes',
            description:'A random movie generator to help you decide what to watch.',
            tech:''
        },
        {
            title: 'Shop-Shop',
            image: shop,
            alt:'Shop-Shop homepage',
            linkDeployed: 'https://desolate-sierra-23837.herokuapp.com/',
            linkGithub:'https://github.com/Cody-Junier/shop-shop',
            description:'An ecommerce PWA with an integrated payment system.',
            tech:''
        },
        {
            title: 'Nifty Notes',
            image: note,
            alt:'Nifty Notes home page',
            linkDeployed: 'https://nifty-notes.herokuapp.com/',
            linkGithub:'https://github.com/Cody-Junier/Nifty-Notes',
            description:'A simple note-taking app.',
            tech:''
        },
        {
            title: 'Where Weather',
            image: weather,
            alt:'example of where wheather functionality',
            linkDeployed: 'https://cody-junier.github.io/WhereWeather/',
            linkGithub:'https://github.com/Cody-Junier/WhereWeather',
            description:'A weather forcasting app based on a city search.',
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