import React from 'react';
import Link from 'gatsby-link';

const BoreasPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Project Boreas</h1>
        <p className="bodyText">Boreas is the newest addition to WARG’s fleet of autonomous aircraft. Still in the early stages, this twin motor electric plane promises to have an innovative fiberglass airframe design and 4 kg payload capacity. </p>
        <p className="bodyText">The aircraft’s long range capabilities and 90 minutes of flight time will prove to be major assets during competitions. The future for Boreas is exciting, as plans include entering future AUVSI Student Unmanned Aerial Systems Competitions.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="/assets/boreas.jpg" />
      </div>
    </div>
    <OtherProjects current="Project Boreas" />
  </div>
)

export default BoreasPage;
