import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <div className="col-md-12 midsection">
        <h2>About Me</h2>
        <Row>
          <Col size="sm-12">
            <img
              className="img profile-pic float-left"
              src={require("../components/assets/images/DSC00484.JPG")}
              alt=""
            />
            <div className="bio">
              <h3>
                IT engineer who loves to transform creative ideas into reality
                through advance technology and software engineering. I am passionate
                about learning and develop coding skill through real world use cases.
                With over 5 years of experience with IT infrastructure, I have in
                depth knowledge in server management both windows and linux as well as
                authentication and authorization protocols such as SAML, OpenID, OAUTH,
                RADIUS, HTTP, SSL/TLS, and etc. As an entry level full stack developer,
                I am passionate about Javascript and React, but also have good knowledge
                in frontend development.
                </h3>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
