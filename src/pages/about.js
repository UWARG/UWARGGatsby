import React from 'react';
import Link from 'gatsby-link';

const AboutPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>About Us</h1>
        <p className="bodyText">The Waterloo Aerial Robotics Group is a team of students developing autonomous aerial vehicles capable of performing various tasks without the slightest amount of human interaction.</p>
        <p className="bodyText">These aircraft must be capable of tasks such as flight stabilization, navigation, and visual recognition.</p>
        <p className="bodyText">With the help of our sponsors, WARG is able to foster innovation and push the boundaries of what is possible.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="/assets/aboutusphoto.png"/>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Humble Beginnings</h1>
        <p className="bodyText">The Waterloo Aerial Robotics Group was founded in the fall of 1997 by a first year computer engineering student named Dave Kroetsch.</p>
        <p className="bodyText">With the help of Professor David Wang (Electrical and Computer Engineering), a small group of undergraduate computer engineering students officially started to work toward competing in the International Aerial Robotics Competition Millennium Event.</p>
        <p className="bodyText">Since then, WARG has competed in numerous national and international competitions, always bringing innovative ideas and designs.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="/assets/humblephoto.jpg"/>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Hyperion</h1>
        <p className="bodyText">Hyperion is the largest vehicle WARG has built to date. Designed and built from 2004 to 2008, Hyperion boasts a 4.3 meter wing span and two electric motors around three horsepower each.</p>
        <p className="bodyText"> Hyperion’s namesake is from ancient Greek mythology, meaning “he who goes above”, and rightfully so. Built to compete in the International Aerial Robotics Competition, this UAV was outfitted to complete many mission specific tasks, including identifying target buildings and obtaining visual reconnaissance information.</p>
        <p className="bodyText">Once soaring above competitors in terms of size and speed, Hyperion now resides in the WARG bay, inspiring current team members as they work on the group’s latest projects.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="/assets/hyperion.jpg"/>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Above and Beyond</h1>
        <p className="bodyText">WARG is focused on the future and equipping its members with the knowledge and know-how to succeed not only as a team, but as individuals as well. It is a place that students can come to learn and gain experience, as well as hone and expand their skills and understanding.</p>
        <p className="bodyText">WARG’s current projects include our competition vehicle, Hex, and future fixed-wing plane, Boreas. Hex’s production is in full swing as we work towards the upcoming 2018 USC Student UAS Competition. Still in the early stages, Boreas is full of possibilities for future competitions, and promises to be an innovative aircraft.</p>
        <p className="bodyText">Like what you’re hearing? Take a look at all that WARG has to offer on our <Link to="/join">join</Link> page.</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="/assets/aboveandbeyond.jpg"/>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-6 col-12">
        <h1>Outreach</h1>
        <p className="bodyText">Interested in knowing more about unmanned aerial systems and vehicles but don’t know where to start? WARG provides students with many opportunities to learn more about what we’re passionate about. </p>
        <p className="bodyText">CAD workshops are available to students interested in learning the basics of computer-aided design programs, extremely useful tools in the UAV industry. WARG also facilitates Amateur Radio Operator Certificate licensing with KWARC (Kitchener/Waterloo Amateur Radio Club) by providing study aids and examination opportunities.</p>
        <p className="bodyText">More exciting events with WARG are to come in the future!</p>
      </div>
      <div className="col-md-6 col-12">
        <img className="img-fluid" src="/assets/outreach.jpg"/>
      </div>
    </div>
  </div>
)

export default AboutPage;
