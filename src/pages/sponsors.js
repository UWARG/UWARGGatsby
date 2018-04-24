import React from 'react';
import Link from 'gatsby-link';

const SponsorsPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Sponsors</h1>
        <p className="bodyText">We would like to express our most sincere gratitude to all of our sponsors for their contributions. WARG could not operate without their generous support.</p>
        <p className="bodyText">Thank you.</p>
      </div>
    </div>
    <div style={{marginBottom: "1em"}} className="row">
      <div className="col-md-6 col-12">
        <h1>Financial Contributers</h1>
        <p className="bodyText">We would like to thank the following organizations for their generous financial contributions, which allow us to buy the equipment necessary for us to be successful in our endeavours.</p>
      </div>
    </div>
    <div style={{marginBottom: "7em"}} className="row">
      <img src="financesponsors.png" className="img-fluid" />
    </div>
    <div style={{marginBottom: "1em"}} className="row">
      <div className="col-md-6 col-12">
        <h1>Product and Service Contributers</h1>
        <p className="bodyText">Much of the equipment and services our team uses have been graciously donated or loaned to us from our sponsors in industry.</p>
      </div>
    </div>
    <div style={{marginBottom: "3em"}} className="row">
      <img src="servicesponsors.png" className="img-fluid" />
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>How to Become a Sponsor</h1>
        <p className="bodyText">The Waterloo Aerial Robotics Group would not exist and could not operate were it not for the assistance provided from our many sponsors. If you own or represent a company or organization, we encourage you to consider sponsoring our exciting entry into the Aerial Robotics Competition.</p>
        <p className="bodyText">WARG would stand to benefit from your financial assistance, technology, and expertise. You can start by taking a look at the sponsor information package, and contacting us.</p>
        <a href="/uwargsponsorpackage.pdf" target="_blank"><button className="btn btn-lg button whiteText mainColor">Download Sponsor Package</button></a>
      </div>
    </div>
  </div>
)

export default SponsorsPage;
