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
      <div className='container'>
      <div className="cards col-lg-12 col-md-12 col-sm-12">
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
      <Card
        title={projects[1].title}
        image={projects[1].image}
        description={projects[1].description}
        github={projects[1].github}
      />
      </div>
      <div className='col-lg-4 col-md-4 col-md-4 sm-12'>
      <Card
        title={projects[2].title}
        image={projects[2].image}
        description={projects[2].description}
        github={projects[2].github}
      />
      </div>
      <div className='col-lg-4 col-md-4 col-md-4 sm-12'>
      <Card
        title={projects[3].title}
        image={projects[3].image}
        description={projects[3].description}
        github={projects[3].github}
      />
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-4 col-md-4 col-md-4 sm-12'>
       <Card
        title={projects[4].title}
        image={projects[4].image}
        description={projects[4].description}
        github={projects[4].github}
      />
      </div>
      <div className='col-lg-4 col-md-4 sm-12'>
      <Card
        title={projects[5].title}
        image={projects[5].image}
        description={projects[5].description}
        github={projects[5].github}
      />
      </div>
      <div className='col-lg-4 col-md-4 sm-12'>
      <Card
        title={projects[6].title}
        image={projects[6].image}
        description={projects[6].description}
        github={projects[6].github}
      />
      </div>
      </div>
      </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Portfolio;
