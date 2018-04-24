import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{padding: "0em"}} className="container-fluid">
    <div className="heroImage">
      <div style={{paddingLeft: "2.5em", paddingRight: "2.5em"}} className="row no-gutters">
        <div className="col-xl-6 col-md-9 col-12">
          <h1 style={{marginTop: "2em"}} className="whiteText">Waterloo Aerial Robotics Group</h1>
          <p style={{marginTop: "1em"}} className="whiteText bodyText">We’re a team of University of Waterloo students who are developing a series of fully autonomous flying robots for entry into Unmanned Systems Canada's Student UAS Competition.</p>
          <div style={{marginTop: "3em"}} className="row justify-content-between">
            <div className="col-md-4 col-12 mobileMarginBottom">
              <Link className="noUnderline" to="/projects"><button type="button" className="btn btn-lg btn-block whiteBackground button">What we build</button></Link>
            </div>
            <div className="col-md-4 col-12 mobileMarginBottom">
              <Link className="noUnderline" to="/sponsors"><button type="button" className="btn btn-lg btn-block whiteBackground button">Our Sponsors</button></Link>
            </div>
            <div className="col-md-4 col-12">
              <Link className="noUnderline" to="/join"><button type="button" className="btn btn-lg btn-block whiteBackground button">Get Involved</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{paddingLeft: "2em", paddingRight: "2em"}} className="paddingLeft row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>Who we are</h1>
        <p className="bodyText">The Waterloo Aerial Robotics Group (WARG) is a student design team at the University of Waterloo competing in the Unmanned Systems Canada Student UAS Competition.</p>
        <p style={{marginBottom: "3em"}} className="bodyText"> We are a passionate group of students focused on innovating the Unmanned Aerial Vehicle industry. We take pride in building everything ourselves, from the autopilot and computer vision software, to the custom designed PicPilot board that we use on our aircraft.</p>
        <h1>Learn More</h1>
        <p className="bodyText">If you’re interested in learning more about us, read our about page. We’re always looking for new talent, so if you’d like to join, find out more <Link to="/join">here</Link>. If you represent a company or would like to sponsor us, click <Link to="/sponsors">here</Link> to view the sponsor information package, or you can <Link to="/contact">contact us</Link> directly.</p>
      </div>
      <div className="col-md-3 col-12">
        <div className="row">
          <div className="col-12">
            <h1>Top Sponsors</h1>
          </div>
        </div>
        <div className="row">
          <img />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
