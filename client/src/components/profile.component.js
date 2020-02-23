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
                        {props.links.github &&
                            <img alt="Github Icon" className="social-icons github" src="./assets/github.svg"></img>
                        }
                        {props.links.facebook &&
                            <img alt="Facebook Icon" className="social-icons facebook" src="./assets/facebook.svg"></img>
                        }
                        {props.links.instagram &&
                            <img alt="Instagram Icon" className="social-icons instagram" src="./assets/instagram.svg"></img>
                        }
                        {props.links.linkedin &&
                            <img alt="Linkedin Icon" className="social-icons linkedin" src="./assets/linkedin.svg"></img>
                        }
                        {props.links.website &&
                            <img alt="Website Icon" className="social-icons website" src="./assets/link.svg"></img>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Profile;
