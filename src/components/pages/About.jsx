import React from 'react';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import JSXVariables from '../JSXVariables';
import "../../styles/pages.css";

function About() {
  return (
    <div className='container'>
      <Wrapper>
      <Title>About</Title>
      <p>Trainee Full Stack Web Developer with a Bachelor of Science in Mathematics, a double minor in Computer Science and Biological Sciences, and a work background in Web Design/Development. I have recently been doing a 16 week bootcamp in Frontend Web Development to learn more Javascript and modern forms of Web Development.</p>
      <JSXVariables />
      <p>
        HTML5, CSS, Javascript, Git, Bootstrap, jQuery, NodeJS, React
      </p>
    </Wrapper>
    </div>
  )
}

export default About;
