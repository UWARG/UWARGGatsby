import React from 'react';
import Link from 'gatsby-link';

import OtherProjects from '../components/otherprojects.js';

const HexPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Project Hex</h1>
        <p className="bodyText">This is our current UAV project, as we work towards the 2018 USC Student UAS Competition. Designed by WARG for up close mission work, this hexacopter possesses approximately half an hour of flight time per charge.</p>
        <p className="bodyText">WARG’s hexacopter is equipped with six rotors that allow for greater stability, lifting power, and landing skills. With 5 kg of payload capacity, competition and mission specific tasks can be achieved, such as object transport and retrieval.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="hex.png" />
      </div>
    </div>
    <OtherProjects current="Project Hex" />
  </div>
)

export default HexPage;
