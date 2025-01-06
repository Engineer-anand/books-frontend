import React from 'react';
// import './contact.css';
import BG from './bg'
import DropDown from '../Dropdown';
import BackButton from './BackButton';
function Contact() {
    return (
        <>
            <BG />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>If you have any questions, feel free to reach out to us via email:</p>
                <a  className="contact-email">
                    anand.engineer.ak@gmail.com
                </a>
            </div>
            <DropDown/>
            <BackButton/>
        </>
    );
}

export default Contact;
