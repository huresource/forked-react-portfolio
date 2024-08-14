import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          {props.isBlog ? "Blog" : "GitHub"}
          <BsGithub style={{ marginLeft: "5px", marginBottom: "4px", height: "15px" }}/>
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{}}
          >
            {"Website"}
            <FiExternalLink style={{ marginLeft: "4px", marginBottom: "4px", height: "15px" }}/>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
