import React from 'react';
import JSXVariables from '../JSXVariables';
import Navbar from '../Navbar';
import "../../styles/pages.css";
import "../../styles/Navbar.css";

function About() {
  return (
    <div className='container'>
      <p>Junior Software Engineer with a Bachelor of Science in Mathematics, a double minor in Computer Science and Biological Sciences, and a background in Web Development. I have recently been doing a 16 week bootcamp in Frontend Wed Development to learn more Javascript and modern forms of Web Development.</p>
      <JSXVariables />
      <p>
        HTML5, CSS, Javascript, Git, Bootstrap, jQuery, NodeJS, React
      </p>
      <Navbar />
    </div>
  )
}

export default About;
