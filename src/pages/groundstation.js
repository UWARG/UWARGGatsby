import React from 'react';
import Link from 'gatsby-link';

import OtherProjects from '../components/otherprojects.js';

const GroundStationPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Ground Station</h1>
        <p className="bodyText">In order to receive image data from our aircraft, we created a ground unit capable of tracking vehicles through telemetry data. This was used to determine flight paths and target locations. With it we could also configure the aircraft’s path and settings extremely easily and wirelessly.</p>
        <p className="bodyText">WARG’s Ground Station was created to be perfectly compatible with PICPilot, controlling all aspects and features of the autopilot system. The setup was simple, consisting of two parts:</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="groundstation4.png" />
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h4>Data Relay Station</h4>
        <p className="bodyText">The Data Relay Station is a python server. This software is part of the base station. It contributed to the core functionality of all ground systems. The Data Relay connected to the XBee module and distributed the data across a network. Data was transmitted in a comma delimited fashion. This allowed any application to integrate with the PICPilot system.</p>
        <h4>Ground Station</h4>
        <p className="bodyText">WARG’s Ground Station is the second component of the Ground Station as a whole. It displayed the data from the Data Relay Station in a user friendly format. The WARG Ground Station had offline map support, as well as fancy telemetry graphics, so WARG members could tell exactly what was going on at all times. Written in JavaScript and running Node.js, it was easily modified to suit the requirements of the current situation.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="groundstation2.png" />
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <p style={{marginBottom: ".5em"}} className="bodyText">Features:</p>
        <ul>
          <li style={{marginBottom: ".5em"}} className="bodyText">Easy to use</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">One click start-up</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Integrated with live-video feed, it can provide map-photo overlays</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">PICPilot Integration</li>
        </ul>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="groundstation3.png" />
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <p className="bodyText"><strong>Github Link:</strong> <a href="https://github.com/UWARG/WARG-Ground-Station-V2" target="_blank">https://github.com/UWARG/WARG-Ground-Station-V2</a></p>
        <p className="bodyText"><strong>Download Link:</strong> <a href="https://github.com/UWARG/WARG-Ground-Station-V2/archive/master.zip" target="_blank">https://github.com/UWARG/WARG-Ground-Station-V2/archive/master.zip</a></p>
        <p className="bodyText"><strong>Instructions to compile:</strong> <a href="https://github.com/UWARG/WARG-Ground-Station-V2/blob/master/README.md" target="_blank">https://github.com/UWARG/WARG-Ground-Station-V2/blob/master/README.md</a></p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="groundstation1.png" />
      </div>
    </div>
    <OtherProjects current="Ground Station" />
  </div>
)

export default GroundStationPage;
