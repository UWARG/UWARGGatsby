import React from 'react';
import Link from 'gatsby-link';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer style={{marginTop: "4em"}} className="mainColor footer">
        <div className="row no-gutters  justify-content-lg-between justify-content-md-center">
          <div className="col-auto">
            <div className="row no-gutters">
              <div className="col-12">
                <h5 className="whiteText">Find us on:</h5>
              </div>
            </div>
            <div style={{marginBottom: "1.5em"}} className="row no-gutters">
              <div className="col-12">
                <a href="https://www.facebook.com/UWaterlooWARG?fref=nf" className="noUnderline" href="" target="_blank"><i className="fa fa-facebook fa-2x whiteText mediaIcon"></i></a>
                <a href="https://instagram.com/uwarg/" className="noUnderline" target="_blank"><i className="fa fa-instagram fa-2x whiteText mediaIcon"></i></a>
                <a href="https://twitter.com/uw_warg" className="noUnderline" target="_blank"><i className="fa fa-twitter fa-2x whiteText mediaIcon"></i></a>
                <a href="https://github.com/uwarg" className="noUnderline" target="_blank"><i className="fa fa-github fa-2x whiteText mediaIcon"></i></a>
                <a href="mailto:uw.warg@gmail.com?subject=Hello!" className="noUnderline" target="_blank"><i className="fa fa-envelope fa-2x whiteText mediaIcon"></i></a>
              </div>
            </div>
            <div className="row no-gutters hideOnMobile">
              <div style={{textAlign: "center"}} className="col-12">
                <img src="logo.png" width="130" />
              </div>
            </div>
          </div>
          <div className="col-auto hideOnMobile">
            <div className="row no-gutters">
              <div className="col-12">
                <h5 className="whiteText">WARG</h5>
                <Link className="footerLink d-block" to="/about">About</Link>
                <Link className="footerLink d-block" to="/projects">Projects</Link>
                <Link className="footerLink d-block" to="/sponsors">Sponsors</Link>
                <Link className="footerLink d-block" to="/sponsors">Members</Link>
                <Link className="footerLink d-block" to="/contact">Contact</Link>
                <Link className="footerLink d-block" to="/join">Join</Link>
              </div>
            </div>
          </div>
          <div className="col-auto hideOnMobile">
            <div className="row no-gutters">
              <div className="col-12">
                <h5 className="whiteText">Links</h5>
                <a className="footerLink d-block" href="https://uwarg.slack.com/" target="_blank">Slack</a>
                <a className="footerLink d-block" href="http://www.docs.uwarg.com" target="_blank">Docs</a>
                <a className="footerLink d-block" href="https://uwarg-docs.atlassian.net/wiki" target="_blank">Atlassian</a>
                <a className="footerLink d-block" href="https://www.unmannedsystems.ca/" target="_blank">Unmanned Systems Canada</a>
                <a className="footerLink d-block" href="https://uwaterloo.ca/sedra-student-design-centre/" target="_blank">Sedra Student Design Centre</a>
              </div>
            </div>
          </div>
          <div className="col-auto hideOnMobile">
            <div className="row no-gutters">
              <div className="col-12">
                <h5 className="whiteText">Contact</h5>
                <a className="whiteText footerContactText" href="mailto:uw.warg@gmail.com?subject=Hello!">uw.warg@gmail.com</a>
                <p className="footerContactText" style={{color: "#C5C5C5", marginTop: ".75em"}}>Waterloo Aerial Robotics Group<br></br>200 University Avenue West<br></br>Engineering 5 Student Design Center 1101<br></br>Waterloo ON N2L 3G1, Canada</p>
                <p className="whiteText footerContactText" style={{marginTop: ".75em"}}>© Copyright Waterloo Aerial Robotics Group 2018</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
