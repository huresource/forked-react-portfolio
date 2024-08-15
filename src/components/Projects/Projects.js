import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import perfectketo from "../../Assets/Projects/perfectketo.png";
import verasoph from "../../Assets/Projects/verasoph.png";
import suicide from "../../Assets/Projects/suicide.png";
import meetatthetee from "../../Assets/Projects/meet-at-the-tee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="fat-blue">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some recent projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={verasoph}
              isBlog={false}
              title="Verasoph"
              description="My Shopify store customized from the Sense theme. Product mockups designed by me."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://verasoph.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meetatthetee}
              isBlog={false}
              title="Meet at the Tee"
              description="Community platform for golfers to create  events and invite members to their golf reservations. Web application built with Bubble.io contains features that allow users to filter reservations by their location, create user-specific groups, and view their golf reservation schedule."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://meetatthetee.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perfectketo}
              isBlog={false}
              title="Perfect Keto"
              description="Implemented entire site redesign including navigation, product page layout, and landing pages. Managed all Shopify apps and third-party integrations."
              ghLink="https://perfectketo.com"
              demoLink="https://perfectketo.com"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
