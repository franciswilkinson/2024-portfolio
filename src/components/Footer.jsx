import React from "react";
import quote, { getRandomQuote } from "inspirational-quotes";
const { author, text } = quote;
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Random Quote: "{quote.getRandomQuote()}"</p>
    </footer>
  );
}

export default Footer;
