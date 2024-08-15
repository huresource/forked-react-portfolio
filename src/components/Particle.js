import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          color:{
            value: "#fff"
          },
          number: {
            value: 12,
            density: {
              enable: true,
              value_area: 100,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.08,
            color: "#fff"
          },
          move: {
            enable: true,
            speed: 0.1,
          },
          size: {
            value: { min: 0.3, max: 0.5 }
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.1,
              opacity_min: 0.03,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb:1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
