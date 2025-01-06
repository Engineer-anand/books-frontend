import React from 'react';
// import './About.css'; // Import the CSS file
import BG from './models/bg';
import DropDown from './Dropdown';
import BackButton from './models/BackButton';
const About = () => {
  return (
    <>
      <BG />
      <div className="about-container">
        <h1>About Us ✨</h1>
        <p>
          Welcome to <strong>AnTECH</strong>! 🚀 We are passionate about delivering cutting-edge solutions that empower businesses and individuals to thrive in the digital era.
        </p>
        <p>
          Our mission is to innovate and create seamless experiences through technology, helping our clients achieve their goals and unlock new opportunities. 🌟 With a dedicated team of experts, we specialize in:
        </p>
        <ul>
          <li>💻 Custom software development</li>
          <li>📱 Mobile and web applications</li>
          <li>🌐 Scalable cloud solutions</li>
          {/* <li>🔍 Data analytics and insights</li> */}
        </ul>
        <p>
          At <strong>AnTECH</strong>, we believe in collaboration, creativity, and excellence. Our team is committed to providing top-notch services tailored to your unique needs. 🎯
        </p>
        <p>
          Let’s work together to transform your ideas into reality and make a lasting impact. Contact us today and embark on a journey of innovation with us! ✉️
        </p>
        <p className="footer-text">
          <strong>Follow us on:</strong> 🌍 <a href="https://www.linkedin.com/in/anand-singh-engg?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a> 
        </p>
      </div>
      <DropDown/>
      <BackButton/>
    </>
  );
};

export default About;
