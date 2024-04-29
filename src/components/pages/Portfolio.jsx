import React from 'react';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Card from "../../components/Card";
import "../../styles/pages.css";

import projects from "../../projects.json";

function Portfolio() {
  return (
    <div>
      <Wrapper>
      <Title>Portfolio</Title>
      <Card
        title={projects[1].title}
        image={projects[1].image}
        description={projects[1].description}
        github={projects[1].github}
      />
      <Card
        title={projects[2].title}
        image={projects[2].image}
        description={projects[2].description}
        github={projects[2].github}
      />
      <Card
        title={projects[3].title}
        image={projects[3].image}
        description={projects[3].description}
        github={projects[3].github}
      />
      </Wrapper>
    </div>
  );
}

export default Portfolio;
