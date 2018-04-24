import React from 'react';
import Link from 'gatsby-link';

const ZeroPilotPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Zero Pilot</h1>
        <p className="bodyText">ZeroPilot is WARG’s newest custom built autopilot system, aiding aircraft with navigation and increasing autonomy.</p>
        <p className="bodyText">The system is based off a powerful ARM Cortex-M7 processor. This processor runs at 216 MHz, making it capable of supporting a real-time operating system (RTOS). The RTOS makes immediately processing data from the sky to the ground much easier. The ZeroPilot system is also equipped with a manual control take over switch. This is useful for operating a first-person view flight, an essential part of competition!</p>
        <p className="bodyText">Path management, attitude management and sensor management are all regulated through this custom autopilot board. The Attitude Manager’s responsibility is to track and sustain the rotational position of the aircraft in 3D space. The Path Manager’s primary duty is to maintain the course of the aircraft. ZeroPilot incorporates sensor data from multiple sensors in order to understand its position in relation to the ground station and the target.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="/assets/zeropilot.jpg" />
      </div>
    </div>
    <OtherProjects current="ZeroPilot" />
  </div>
)

export default ZeroPilotPage;
