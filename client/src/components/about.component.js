import React from 'react';
import Profile from "./profile.component"
function About() {
    return (
        <div id="about-container">

            {/* <img src="./logo.svg"></img> */}
            <div className="about-block" id="about-eboard">
                <div className="about-header">
                    <h1>Current E-Board</h1>
                </div>
                <div className="profile-lister">
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </div>
            <div className="about-block" id="about-faculty">
                <div className="about-header">
                    <h1>Faculty mentor</h1>
                </div>
                <div id="profile-lister-center">
                    <Profile />
                </div>
            </div>

            <div className="about-block" id="about-founders">
                <div className="about-header">
                    <h1>Founders</h1>
                </div>
                <div className="profile-lister">
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </div>
            <div className="about-block" id="about-alumni">
                <div className="about-header">
                    <h1>Alumni</h1>
                </div>
                <div className="profile-lister">
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default About;
