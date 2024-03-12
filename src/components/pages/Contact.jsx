import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import "../../styles/pages.css";
import Form from "../Form"
import "../../styles/Navbar.css";
import Learn from './Learn';

function Contact(props) {
  return (
    <div>
      <Form />
      <p></p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default Contact;
