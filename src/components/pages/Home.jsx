import React from 'react';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Card from "../../components/Card";
import Navbar from '../Navbar';
import "../../styles/pages.css";
import "../../styles/Navbar.css";
import projects from "../../projects.json";

function Home() {
  return (
    <div className="pages">
      <div className="cards container">
      <Wrapper>
      <Title>Hi, I am Francis Wilkinson</Title>
      <Card
        title={projects[0].title}
        image={projects[0].image}
        description={projects[0].description}
        github={projects[0].github}
      />
      <Navbar />
      </Wrapper>
      </div>
    </div>
  );
}

export default Home;
