import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return ( 
    <div style={{ padding: "50px" }}>
      <Typewriter
        options={{
          strings: [
            "Freelancer",
            "Amateur website creator",
            "Ecommerce manager",
            "Philosopher",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
