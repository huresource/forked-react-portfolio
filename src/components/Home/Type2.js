import React from "react";
import { TypeAnimation } from 'react-type-animation';


function TypeAnimated() {
    let titleLine = '<p className="bluer bold">Freelancer</p>'
    let descLine = '<p className="small-type">Jack of all traders</p>'

    const titles = [
        'freelancer',
        'website creator',
        'Shopify manager',
        'philosopher'
    ];

  return ( 
    <div className="small-type" style={{ padding: "50px" }}>
       <TypeAnimation>

              {titleLine}
              <br />

              {descLine}
              <br />


          </TypeAnimation>
    </div>
  );
}

export default TypeAnimated;
