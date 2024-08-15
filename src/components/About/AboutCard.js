import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi again! I'm <span className="enhance">Priscilla. </span>
            <br />
            A freelancer based out of <span className="enhance"> Denver, Colorado.</span>
            <br />
            I <span className="enhance">create</span> websites.
            <br />
            I <span className="enhance">manage</span> Shopify stores.
            <br />
            <br />
            <span className="h5">Other things I love</span>
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

          <div className="quote-block">
            <p className="quote">
              "Think lightly of yourself and deeply of the world."{" "}
            </p>
            <footer className="blockquote-footer">Miyamoto Musashi</footer>
          </div>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
