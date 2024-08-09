import React from "react";
import { Col, Row } from "react-bootstrap";
import bubbleLogo from "../../Assets/bubble-io-logo.svg";
import { 
  FaShopify,
  FaCss3,
  FaHtml5,
  FaWordpressSimple,
  FaAmazon,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiGoogleanalytics,
  SiNotion,
  SiAsana,
  SiCanva,
  SiVisualstudiocode,
  SiSlack,
  SiMacos,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaShopify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
        src={bubbleLogo}
        style={{ maxHeight: "120px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWordpressSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAmazon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAsana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
    </Row>
  );
}

export default Techstack;
