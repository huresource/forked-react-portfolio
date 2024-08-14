import React from "react";
import Typewriter from "typewriter-effect";
import { ReactTyped } from "react-typed";


function SingleType() {
  return ( 
    <div className="small-type" style={{ padding: "50px" }}>
      <ReactTyped
            strings={["Jack of all trades, master of none?", "Jack of all trades, master of none."]}
            className="bold text-shadow"
            loop={true}
            backSpeed={50}
            typeSpeed={80}
            backDelay={2000}
            startDelay={1000}
            smartBackspace={true}
        />
    </div>
  );
}

export default SingleType;
