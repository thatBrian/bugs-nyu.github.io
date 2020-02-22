import React from 'react';

function Profile(props) {
    return (
        <div className="profile-container">
            <div className="profile-left">
                <div className="profile-image-container">
                    <img></img>
                </div>
            </div>
            <div className="profile-information">
                <h3 className="profile-name">
                    Name
                    </h3>
                <div className="profile-description">
                    Description: BlABLADJBLKJSDBLKSFJ
                    </div>
                <div>
                    Social Icons
                    </div>
            </div>
        </div>
    );
}

export default Profile;
