import React from 'react';

function Contact() {
    return (
        <div id="contact-container">
            <div id="contact-header">
                <img className="home-logo" src="./logo_phone.svg"></img>
                <h1>Contact</h1>
            </div>
            <div id="contact-description">
                Do you have a burning question? Fill out the form below and we will get back to you! 
                You can also checkout our <div id="contact-facebook">Facebook</div> page where we keep the most up-to-date info.
            </div>
            <div id="contact-form">
                <div>
                    <input className="contact-input" placeholder="name"></input>
                </div>
                <div>
                    <input className="contact-input" placeholder="email"></input>
                </div>
                <div>
                    <textarea className="contact-input" placeholder="question" rows="15"></textarea>
                </div>
                <div id="contact-submit-wrapper">
                    <button id="contact-submit">
                        <h3>Submit</h3>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Contact;
