import React from 'react';
import Link from 'gatsby-link';

const ComputerVisionPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Computer Vision System</h1>
        <p className="bodyText">WARG’s computer vision system performs live processing of HD video during flight. Effectively mapping images to geolocations and detecting targets on the ground during competitions. It does so by clustering related images, then identifying images and objects of interest – an important aspect of competition.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="computervisionsystem.png" />
      </div>
    </div>
    <OtherProjects current="Computer Vision System" />
  </div>
)

export default ComputerVisionPage;
