import React from 'react';

class Sponsor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if(this.props.size == "sm") {
      return (
        <div style={{marginBottom: "1.5em"}} className="col-md-3 col-3 mobileMarginBottom">
          <img className="img-fluid" src={this.props.link} />
        </div>
      );
    }

    if(this.props.size == "md") {
      return (
        <div style={{marginBottom: "1.5em"}} className="col-md-4 col-9 mobileMarginBottom">
          <img className="img-fluid" src={this.props.link} />
        </div>
      );
    }

    if(this.props.size == "lg") {
      return (
        <div style={{marginBottom: "1.5em"}} className="col-md-6 col-12 mobileMarginBottom">
          <img className="img-fluid" src={this.props.link} />
        </div>
      );
    }

    if(this.props.size == "xl") {
      return (
        <div style={{marginBottom: "1.5em"}} className="col-md-9 col-12 mobileMarginBottom">
          <img className="img-fluid" src={this.props.link} />
        </div>
      );
    }

  }
}

export default Sponsor;
