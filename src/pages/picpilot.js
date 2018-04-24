import React from 'react';
import Link from 'gatsby-link';

import OtherProjects from '../components/otherprojects.js';

const PicPilotPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>PicPilot</h1>
        <p className="bodyText">The PICPilot is our former custom autopilot board, designed to control all aspects of our aircraft. The design allowed for us to incorporate multi-path algorithm support, circuit-wide timing sync, low latency communications, and seamless camera integration. Not to mention the spotless hand soldering.</p>
        <p className="bodyText">PICPilot's autopilot system was designed to control all aspects of most vehicles. The autopilot system is split into two separate subsystems: An Attitude Manager and a Path Manager.</p>
        <p className="bodyText">The Attitude Manager’s primary task is to track and maintain the rotational position of the aircraft in 3D space. This includes pitch, roll, and yaw, as well as the pitch rate, roll rate, and yaw rate of the aircraft. The Attitude Manager does so via a series of tuned control loops integrated with sensor feedback. Additionally, the Attitude Manager is responsible for managing communications between Ground Control and the aircraft. This subsystem has controlled many WARG vehicles, including quadcopters, planes, and cars.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="picpilot1.png" />
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <p className="bodyText">The Path Manager is responsible for maintaining the course of the aircraft. It provides course corrections in the form of altitude and heading changes. The Path Manager maintains a list of “checkpoints” or waypoints through which the vehicle must fly through, guiding the aircraft from one checkpoint to another through feedback from the GPS. The Path Manager has been optimized for aerial reconnaissance and mapping.</p>
        <p className="bodyText">These two subsystems have their own dedicated microcontroller. The Attitude Manager and the Path Manager both use the Microchip dsPIC33FJ256GP710A. Each processor runs at 80 MHz and has support for multiple UART, SPI, I2C, and PWM interfaces.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="picpilot2.png" />
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <p style={{marginBottom: ".5em"}} className="bodyText">Features:</p>
        <ul>
          <li style={{marginBottom: ".5em"}} className="bodyText">Easy to setup and use</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Plug and Play autopilot system</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Fully autonomous autopilot software with support for partial autonomy (if required, human input is easily possible)</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Low latency data communication with XBee modules (XBee S3B)</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Direct camera interfacing with GoPro Hero 3+ support</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Safety features including channel monitoring to allow a Safety Pilot to alleviate control at any time</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Thorough error and status indicators</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">Auto engaging safety mechanisms, such as the loss of signal “return home” feature</li>
        </ul>
        <p style={{marginBottom: ".5em"}} className="bodyText">Supported Sensors:</p>
        <ul>
          <li style={{marginBottom: ".5em"}} className="bodyText">VectorNAV’s VN-100 AHRS/IMU</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">MEDIATEK-3329 GPS unit</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">MPL3115A2 Altimeter</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">XBee PRO S3B Wireless Link</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">EzUHF R/C Receiver</li>
        </ul>
        <p className="bodyText"><strong>Github Link:</strong> <a href="https://github.com/UWARG/PICpilot" target="_blank">Here</a></p>
        <p className="bodyText"><strong>Download Link:</strong> <a href="https://github.com/UWARG/PICpilot/archive/master.zip" target="_blank">Here</a></p>
        <p className="bodyText"><strong>Instructions to compile:</strong> <a href="https://github.com/UWARG/PICpilot/wiki/Setup" target="_blank">Here</a></p>
        <p className="bodyText"><strong>Wiki:</strong> <a href="https://github.com/UWARG/PICpilot/wiki" target="_blank">Here</a></p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="picpilot3.png" />
      </div>
    </div>
    <OtherProjects current="PicPilot" />
  </div>
)

export default PicPilotPage;
