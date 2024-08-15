import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/avatar.png";
import me from "../../Assets/home-me-7.png";
import Tilt from "react-parallax-tilt";
import HomeInfo from "./HomeInfo";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="fat-blue"> PRISCILLA</strong>
              </h1>
              <p>
                A freelancer based out of <span className="enhance"> Denver, Colorado.</span>
                <br />
                I <span className="enhance">create</span> websites.
                <br />
                I <span className="enhance">manage</span> Shopify stores.
                <br />
              </p>
              <Type />
              
            </Col>

            <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={me} className="img-fluid" alt="avatar" style={{ maxHeight: "450px" }}/>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
