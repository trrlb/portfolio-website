import React from 'react';
import './About.css';
import Image from '../../assets/imagen2.jpg'

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="description">
        <h3>About me</h3>
        <p>Hola me llamo Alvaro Torralba y soy estudiante de desarrollo de aplicaciones Web Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem 
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem.</p>
      </div>

      <div className="image-container">
        <img src={Image} alt="about" />
      </div>

    </div>
  );
};

export default About;
