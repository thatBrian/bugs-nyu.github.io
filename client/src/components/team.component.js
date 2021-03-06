import React from 'react';
import Profile from "./profile.component"
import {Link} from "react-router-dom";

function Team(props) {
    return (
        <div id="about-container">

            <Link to="/"><img alt="Bugs Logo for Teams" className="home-logo" src="./logo_profile.svg"></img></Link>

            <div className="about-block" id="about-eboard">
                <div className="about-header">
                    <h1>Current E-Board</h1>
                </div>
                <div className="profile-lister">
                    {props.eboard.map((data, index) => {
                        return <Profile
                            key={data.name}
                            image={data.image}
                            position={data.position ? data.position : null}
                            name={data.name}
                            description={data.description}
                            links={data.links}

                        />
                    })}
                </div>
            </div>
            <div className="about-block" id="about-faculty">
                <div className="about-header">
                    <h1>Faculty mentor</h1>
                </div>
                <div id="profile-lister-center">
                    {props.mentor.map((data, index) => {
                        return <Profile
                            key={data.name}
                            image={data.image}
                            position={data.position ? data.position : null}
                            name={data.name}
                            description={data.description}
                            links={data.links}

                        />
                    })}
                </div>
            </div>

            <div className="about-block" id="about-founders">
                <div className="about-header">
                    <h1>Founders</h1>
                </div>
                <div className="profile-lister">
                    {props.founders.map((data, index) => {
                        return <Profile
                            key={data.name}
                            image={data.image}
                            position={data.position ? data.position : null}
                            name={data.name}
                            description={data.description}
                            links={data.links}

                        />
                    })}
                </div>
            </div>
            <div className="about-block" id="about-alumni">
                <div className="about-header">
                    <h1>Alumni</h1>
                </div>
                <div className="profile-lister">
                    {props.alum.map((data, index) => {
                        return <Profile
                            key={data.name}
                            image={data.image}
                            position={data.position ? data.position : null}
                            name={data.name}
                            description={data.description}
                            links={data.links}

                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Team;
