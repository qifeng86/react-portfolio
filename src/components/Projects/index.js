import React from "react";
import Col from "../Col";
import "./style.css";

function Project(props) {

  console.log("image", props.imgPath);
  return (
    <Col size="md-4 sm-12">
      <div className="button-container">
        <img
          className="img-fluid portfolio-pic"
          src={props.imgPath}
          alt={props.name}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block deployedBtn"
          onClick={() => window.open(props.herokuUrl)}
        >
          {props.name}
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block githubBtn"
          onClick={() => window.open(props.githubURL)}
        >
          {props.github}
        </button>
      </div>
    </Col>
  );
}

export default Project;
