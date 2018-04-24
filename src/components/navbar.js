import React from 'react';

import { a } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  closeNav() {
    $("#navbarSupportedContent").toggle("collapse");
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark mainColor">
        <a href="/" className="navbar-brand">
          <img src="/assets/logo.png" className="d-inline-block" width="50" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <a onClick={this.closeNav} className="nav-item nav-link" href="/#/about">About</a>
            <a onClick={this.closeNav} className="nav-item nav-link" href="/#/projects">Projects</a>
            <a onClick={this.closeNav} className="nav-item nav-link" href="/#/sponsors">Sponsors</a>
            <a onClick={this.closeNav} className="nav-item nav-link" href="/#/members">Members</a>
            <a onClick={this.closeNav} className="nav-item nav-link" href="http://docs.uwarg.com" target="_blank">Docs</a>
            <a onClick={this.closeNav} className="nav-item nav-link" href="/#/contact">Contact</a>
            <a onClick={this.closeNav} className="nav-item nav-link" href="/#/join">Join</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
