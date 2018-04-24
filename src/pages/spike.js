import React from 'react';
import Link from 'gatsby-link';

const SpikePage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Project SPIKE</h1>
        <p className="bodyText">S.P.I.K.E is WARG’s former competition aircraft. Designed in 2013, S.P.I.K.E. flew from 2014 to 2017 in multiple USC Student UAS competitions.</p>
        <p className="bodyText">This fixed wing plane was made from a Ready Made RC body, and was outfitted to house a GoPro, DSLR camera, custom autopilot board, VectorNav IMU, GPS Module, XBee RF Module, and four 3S 5800mAh lithium polymer batteries.</p>
        <p className="bodyText">This setup allowed WARG to obtain high quality images and stream down live video simultaneously during competition, while S.P.I.K.E. soared 30 km/hr at 100 feet above.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="spike1.png" />
      </div>
    </div>
    <OtherProjects current="Project SPIKE" />
  </div>
)

export default SpikePage;
