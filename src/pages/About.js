import React, { useState, useEffect } from "react";
import profile from '../utils/images/profile.png'

export default function About(){
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        fetch('https://api.github.com/users/Cody-Junier?size=500')
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return(
        <div id="me">
            {userData && (
                <>
                    <img src={userData.avatar_url} alt="Avatar" />
                    <h2>About Me</h2>
                    <p>{userData.bio}</p>
                </>
            )}
            {!userData && (
                <>
                    <img src={profile} alt="Default Profile" />
                    <h2>About Me</h2>
                    <p> I'm Cody! I'm an up-n-coming developer, problem solver, team-builder, and positive guy!
                        I'm a Nashville native, which drew me to Vanderbilt Universitys' Coding Bootcamp in October of 2021. I've learned
                        a lot since then, am continuing to do so, but I know there's a lot more to know- and I'm ready for it!
                        If you'd like to know more about me, feel free to meet me at the climbing gym, or shoot me an email from my Contact page!
                    </p>
                </>
            )}
        </div>
        
    )
}