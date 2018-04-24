import React from 'react';
import Link from 'gatsby-link';

import OtherProjects from '../components/otherprojects.js';

const TrackingAntennaPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Tracking Antenna</h1>
        <p className="bodyText">The tracking antenna enhances the range of WARG’s UAVs using an intelligent tracking system. Using telemetry data, the custom built antenna automatically follows the plane. Long range directional Yagi antennas are used to extend the range of telemetry and video signals.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="trackingantenna.png" />
      </div>
    </div>
    <OtherProjects current="Tracking Antenna" />
  </div>
)

export default TrackingAntennaPage;
