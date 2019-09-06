import React from 'react';
import Link from 'gatsby-link';

const ProjectsPage = () => (
  <div className="container-fluid paddingLeft">
    <div style={{marginTop: "3em"}} className="row">
      <div className="col-12">
        <h1>Projects</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/hex">
          <img className="img-fluid" src="hex.png" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>Project Hex</h4>
          <small className="text-muted">Our current competition vehicle.</small>
        </Link>
      </div>
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/zeropilot">
          <img className="img-fluid" src="zeropilot.jpg" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>ZeroPilot</h4>
          <small className="text-muted">The board behind it all. Custom designed and built by us, for us.</small>
        </Link>
      </div>
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/trackingantenna">
          <img className="img-fluid" src="trackingantenna.png" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>Tracking Antenna</h4>
          <small className="text-muted">The tracking antenna enhances the range of WARG’s UAVs.</small>
        </Link>
      </div>
    </div>
    <div style={{marginTop: "3em"}} className="row">
      <div className="col-12">
        <h1>Future Goals</h1>
      </div>
    </div>
    <div style={{marginBottom: "2em"}} className="row">
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/computervisionsystem">
          <img className="img-fluid" src="computervisionsystem.png" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>Computer Vision System</h4>
          <small className="text-muted">WARG’s computer vision system performs live processing of HD video during flight.</small>
        </Link>
      </div>
    </div>
    <div style={{marginTop: "3em"}} className="row">
      <div className="col-12">
        <h1>Past Projects</h1>
      </div>
    </div>
    <div style={{marginBottom: "2em"}} className="row">
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/spike">
          <img className="img-fluid" src="spikeicon.png" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>Project SPIKE</h4>
          <small className="text-muted">Our current generation plane.</small>
        </Link>
      </div>
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/picpilot">
          <img className="img-fluid" src="picpiloticon.png" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>PICPilot</h4>
          <small className="text-muted">The board behind it all. Built by us, for us.</small>
        </Link>
      </div>
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/groundstation">
          <img className="img-fluid" src="groundstationicon.png" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>Ground Station</h4>
          <small className="text-muted">Seamless wireless control of all our systems.</small>
        </Link>
      </div>
    </div>
    <div style={{marginBottom: "2em"}} className="row">
      <div className="col-md-4 col-12 projectCard">
        <Link className="noUnderline" style={{color: "#262626"}} to="/boreas">
          <img className="img-fluid" src="boreas.jpg" />
          <h4 style={{marginBottom: "0em", marginTop: ".2em"}}>Project Boreas</h4>
          <small className="text-muted">The newest addition to the WARG fleet.</small>
        </Link>
      </div>
    </div>
  </div>
)

export default ProjectsPage;
