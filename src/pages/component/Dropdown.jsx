import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faInfo, faPhone, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function DropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle Logout
  const handleLogoutClick = () => {
    // Clear authentication state and redirect to login page
    localStorage.removeItem('Token');
    navigate('/login');
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-btn" ref={buttonRef} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => navigate('/profile')}>
              <FontAwesomeIcon className='fa' icon={faUser} />
              Profile</li>
            <li onClick={() => navigate('/home')}>
              <FontAwesomeIcon className='fa' icon={faHome} />
              Home</li>
            <li onClick={() => navigate('/about')}>
              <FontAwesomeIcon className='fa' icon={faInfo} />
              About</li>
            <li onClick={() => navigate('/contact')}>
              <FontAwesomeIcon className='fa' icon={faPhone} />
              Contact Us</li>
            <li onClick={handleLogoutClick}>
              <FontAwesomeIcon className='fa' icon={faSignOut} />
              Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
