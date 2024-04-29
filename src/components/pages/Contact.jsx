import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "../../styles/pages.css";
import Title from "../../components/Title";
import Form from "../Form"
import Learn from './Learn';
import Wrapper from '../../components/Wrapper';

function Contact(props) {
  return (
    <div>
      <Wrapper>
      <Title>Contact</Title>
      <Form />
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
      </Wrapper>
    </div>
  );
}

export default Contact;
