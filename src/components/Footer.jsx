import React from "react";
import quote, { getRandomQuote } from "inspirational-quotes";
const { author, text } = quote;
import "../styles/Footer.css";
import "../styles/Navbar.css";
import Navbar from "./Navbar";


function Footer() {
  return (
    <footer className="footer">
      <p>Random Quote: "{quote.getRandomQuote()}"</p>
      <Navbar />
    </footer>
  );
}

export default Footer;
