import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi again! I'm <span className="purple">Priscilla. </span>
            <br />
            A freelancer based out of <span className="purple"> Denver, Colorado.</span>
            <br />
            I <span className="purple">create</span> websites.
            <br />
            I <span className="purple">manage</span> Shopify stores.
            <br />
            <br />
            <span style={{ fontWeight: "600" }}>Other things I love</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cats, all cats
            </li>
            <li className="about-activity">
              <ImPointRight /> Philosophical quotes
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new productivity tools
            </li>
          </ul>

          <p style={{ color: "rgb(154, 198, 245)" }}>
            "Think lightly of yourself and deeply of the world."{" "}
          </p>
          <footer className="blockquote-footer" style={{ opacity: "0.5" }}>Miyamoto Musashi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
