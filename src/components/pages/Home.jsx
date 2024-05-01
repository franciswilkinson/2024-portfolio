import React from 'react';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Card from "../../components/Card";
import "../../styles/pages.css";
import projects from "../../projects.json";

function Home() {
  return (
    <div className="pages">
      <Wrapper>
      <Title></Title>
      <div className="container">
        <div className="row">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <Card className=""
                  title={projects[0].title}
                  image={projects[0].image}
                 description={projects[0].description}
                 github={projects[0].github}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Welcome to my React Web Developer Portfolio Site!</h3>
                  <h5 className="card-text">Hi, I am Francis. I'm a Trainee Full Stack Web Developer.</h5>
                  <p className="card-text"><small className="text-muted">Looking for new & challenging roles.</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
      </div>
  );
}

export default Home;
