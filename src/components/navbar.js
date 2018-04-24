import React from 'react';
import Link from 'gatsby-link';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.closeNav = this.closeNav.bind(this);
  }

  closeNav() {
    $("#navbarSupportedContent").toggle("collapse");
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark mainColor">
        <Link to="/" className="navbar-brand">
          <img src="logo.png" className="d-inline-block" width="50" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <Link onClick={this.closeNav} className="nav-item nav-link" to="/about">About</Link>
            <Link onClick={this.closeNav} className="nav-item nav-link" to="/projects">Projects</Link>
            <Link onClick={this.closeNav} className="nav-item nav-link" to="/sponsors">Sponsors</Link>
            <Link onClick={this.closeNav} className="nav-item nav-link" to="/members">Members</Link>
            <a onClick={this.closeNav} className="nav-item nav-link" href="https://docs.uwarg.com" target="_blank">Docs</a>
            <Link onClick={this.closeNav} className="nav-item nav-link" to="/contact">Contact</Link>
            <Link onClick={this.closeNav} className="nav-item nav-link" to="/join">Join</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
