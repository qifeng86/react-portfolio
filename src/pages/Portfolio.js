import React from "react";
import Container from "../components/Container";
import Project from "../components/Projects";
import Row from "../components/Row";


function Portfolio() {
  return (
    <Container>
      <section className="content">

        <div className="col-md-12 midsection">
          <h2>Portfolio</h2>
          <Row>
            <Project
              name="Burger Logger"
              github="Github Repo"
              imgPath={require("../components/assets/images/burgerlogger.jpg")}
              linkDeployed="https://ancient-tor-21604.herokuapp.com/"
              linkGithub="https://github.com/qifeng86/Burger-logger-with-MySQL"
            />
            <Project
              name="BigMood"
              github="Github Repo"
              imgPath={require("../components/assets/images/bigmood.jpg")}
              linkDeployed="https://https//bigmoodapp.herokuapp.com/"
              linkGithub="https://github.com/qifeng86/BigMood"
            />
            <Project
              name="Budget Tracker"
              github="Github Repo"
              imgPath={require("../components/assets/images/budgettracker.jpg")}
              linkDeployed="https://stormy-gorge-15363.herokuapp.com/"
              linkGithub="https://github.com/qifeng86/Online-Offline-Budget-Trackers"
            />
          </Row>
          <Row>
            <Project
              name="Workout Tracker"
              github="Github Repo"
              imgPath={require("../components/assets/images/workouttracker.jpg")}
              linkDeployed="https://shielded-brushlands-79575.herokuapp.com/"
              linkGithub="https://github.com/qifeng86/Workout-Tracker"
            />
            <Project
              name="Employee Tracker"
              github="Github Repo"
              imgPath={require("../components/assets/images/employeetracker.jpg")}
              linkDeployed="https://safe-atoll-98586.herokuapp.com/"
              linkGithub="https://github.com/qifeng86/Employee-Directory"
            />
            <Project
              name="React Portfolio"
              github="Github Repo"
              imgPath={require("../components/assets/images/reactportfolio.jpg")}
              linkDeployed="https://safe-atoll-98586.herokuapp.com/"
              linkGithub="https://github.com/qifeng86/React-Portfolio"
            />
          </Row>
        </div>

      </section>
    </Container>
  );
}

export default Portfolio;
