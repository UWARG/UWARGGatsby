import React from 'react';
import Link from 'gatsby-link';

const ContactPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-5 col-12 mr-auto mobileMarginBottom">
        <h1>Contact</h1>
        <p className="bodyText">You’re welcome to contact us about anything, whether you’re a student, sponsor, or just someone who’s interested in what we do. You can either email us at <strong>uw.warg@gmail.com</strong>, or just use the form below.</p>
        <form>
          <div class="form-group">
            <h2>Name</h2>
            <input style={{marginBottom: "2em"}} type="text" className="form-control"/>
            <h2>Email address</h2>
            <input style={{marginBottom: "2em"}} type="email" className="form-control"/>
            <h2>Message</h2>
            <textarea style={{marginBottom: "2em", resize: "none"}} rows="5.5" type="email" className="form-control"/>
            <button style={{paddingLeft: "1em", paddingRight: "1em"}} className="btn btn-lg button whiteText mainColor">Submit</button>
          </div>
        </form>
      </div>
      <div className="col-6 col-md-5 col-12">
        <h1>Mail and Shipments</h1>
        <p className="bodyText">Waterloo Aerial Robotics Group<br></br>200 University Avenue West<br></br>Engineering 5 Student Design Center 1101<br></br>Waterloo ON N2L 3G1, Canada</p>
        <iframe frameborder="0" style={{border: 0, borderRadius: "5px", width: "100%", height: "25em"}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ5z_7HgH0K4gRHU7d8Lw2afc&key=AIzaSyD_SphcRGKTEYg7xzPKYkLQcZV_Ztn45WI" allowfullscreen=""></iframe>
      </div>
    </div>
  </div>
)

export default ContactPage;
