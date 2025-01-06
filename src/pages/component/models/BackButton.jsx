// BackButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import './BackButton.css'; // Add your styles here if needed

function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={handleBack}
            className="back-arrow"
        />
    );
}

export default BackButton;
