import React from 'react';

import { Link } from 'react-router-dom';

class OtherProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  generateProjects() {

    var projectData = [
      {
        name: "Project Boreas",
        description: "The newest addition to the WARG fleet.",
        photo: "boreas.jpg",
        link: "/projectboreas"
      },
      {
        name: "Project Hex",
        description: "Our current competition vehicle.",
        photo: "hex.png",
        link: "/projecthex"
      },
      {
        name: "ZeroPilot",
        description: "The board behind it all. Custom designed and built by us, for us.",
        photo: "zeropilot.jpg",
        link: "/zeropilot"
      },
      {
        name: "Tracking Antenna",
        description: "Seemless wireless control of all our systems.",
        photo: "trackingantenna.png",
        link: "/trackingantenna"
      },
      {
        name: "Computer Vision System",
        description: "Seemless wireless control of all our systems.",
        photo: "computervisionsystem.png",
        link: "/computervisionsystem"
      },
    ];

    var projectComponents = projectData.map((data) => {
      if(data.name != this.props.current) {
        return (
          <div className="col-md-3 col-12 projectCard">
            <Link className="noUnderline" style={{color: "#262626"}} to={data.link}>
              <img className="img-fluid" src={data.photo} />
              <h5 style={{marginBottom: "0em", marginTop: ".2em"}}>{data.name}</h5>
              <small className="text-muted">{data.description}</small>
            </Link>
          </div>
        );
      }
    });

    return projectComponents;
  }

  render() {
    return (
      <div style={{paddingLeft: "15px", marginBottom: "1em"}} className="row">
        <div className-="col-12">
          <h2>Other Projects</h2>
          <div className="row">
            {this.generateProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default OtherProjects;
