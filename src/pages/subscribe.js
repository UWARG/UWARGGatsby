import React from 'react';
import Link from 'gatsby-link';

const SubscribePage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Subscribe</h1>
        <p className="bodyText">Fill out the form below to subscribe to our mailing list. You can unsubscribe from the mailing list here.</p>
        <form name="subscribe" method="POST" netlify>
          <div class="form-group">
            <h2 style={{paddingTop: "1em"}}>Email address</h2>
            <input style={{marginBottom: "2em"}} type="email" className="form-control"/>
            <div style={{paddingTop: "1em"}} className="form-check">
              <p className="form-check-label bodyText">
                <input style={{marginRight: ".5em"}} className="form-check-input" type="checkbox" value="option1" checked disabled/>
                General
              </p>
            </div>
            <div className="form-check">
              <p className="form-check-label bodyText">
                <input style={{marginRight: ".5em"}} className="form-check-input" type="checkbox" value="option2" />
                Mechanical Team
              </p>
            </div>
            <div class="form-check">
              <p className="form-check-label bodyText">
                <input style={{marginRight: ".5em"}} className="form-check-input" type="checkbox" value="option3" />
                Software Team
              </p>
            </div>
            <div style={{marginBottom: "2em"}} className="form-check">
              <p className="form-check-label bodyText">
                <input style={{marginRight: ".5em"}} className="form-check-input" type="checkbox" value="option1" />
                Hardware / Electrical Team
              </p>
            </div>
            <button style={{paddingLeft: "1em", paddingRight: "1em", marginTop: "1em", marginBottom: "3em"}} className="btn btn-lg button whiteText mainColor">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default SubscribePage;
