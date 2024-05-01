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
      <p>I have recently been doing a 16 week bootcamp in Frontend Web Development to learn more Javascript and other modern forms of Web Development.</p>
      <JSXVariables />
      <p>
        Skills: HTML5, CSS, Javascript, Git, Bootstrap, jQuery, NodeJS, React
      </p>
    </Wrapper>
    </div>
  )
}

export default About;
