import React from 'react';
import Dotdotdot from 'react-dotdotdot'
function Profile(props) {
    return (
        <div className="profile-container">
            <div className="profile-left">
                <div className="profile-image-container">
                    <img
                        className="profile-image"
                        src={props.image && ("data:image/" + props.image.extension + ";base64, " + props.image.data)}
                        alt={"Profile image of " + props.name}
                    ></img>

                </div>
                {props.position && <span className="profile-position">{props.position}</span>}
            </div>
            <div className="profile-information">
                <h3 className="profile-name">
                    {props.name ? props.name : "No Name"}
                </h3>

                <div className="profile-description">
                    {props.description ?
                        <Dotdotdot clamp={5}>
                            {props.description}
                        </Dotdotdot> :
                        "No Description"
                    }
                </div>
                {props.links &&
                    <div>
                        {props.link.github &&
                            <img className="social-icons github" src="./assets/github.svg"></img>
                        }
                        {props.link.facebook &&
                            <img className="social-icons facebook" src="./assets/facebook.svg"></img>
                        }
                        {props.link.instagram &&
                            <img className="social-icons instagram" src="./assets/instagram.svg"></img>
                        }
                        {props.link.linkedin &&
                            <img className="social-icons linkedin" src="./assets/linkedin.svg"></img>
                        }
                        {props.link.website &&
                            <img className="social-icons website" src="./assets/link.svg"></img>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Profile;
