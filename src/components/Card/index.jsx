import React from "react";
import "./style.css";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#9373BA",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    padding: 20
  }
};

function Card(props) {
  return (
<div className="cards col-lg-4 col-md-4 col-sm-12">
    <div className="card">
        <div className="img-container">
        <img
        alt= {props.title}
        src= {props.image}
        />
        </div>
      <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> {props.title}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <strong>Github repo:</strong> {props.github}
        </li>
      </ul>
      </div>
    </div>
</div>
    
  );
}

export default Card;
