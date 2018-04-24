import React from 'react';
import Link from 'gatsby-link';

const JoinPage = () => (
  <div className="container-fluid paddingLeft">
    <div className="row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>Join</h1>
        <p className="bodyText">We’re always looking for new talent here at WARG! As long as you’re a student you’re welcome to join, no matter what program or faculty you’re in. The best way to get started is subscribing to our mailing list and coming to our meetings. Also, feel free to join our <a href="https://uwarg.slack.com/" target="_blank">slack</a>.</p>
        <Link className="noUnderline" to="/subscribe"><button style={{paddingLeft: "1em", paddingRight: "1em"}} className="btn btn-lg button whiteText mainColor">Join Mailing List</button></Link>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>Meeting times</h1>
        <p className="bodyText">There are two types of meetings. There are work days, where all members are free to come to the bay (E5 1101) and work on their tasks. There are two work days per week, plus some weekends. Check slack for dates, times, and locations of the meetings since it can vary term to term.</p>
        <p className="bodyText">We also have official meetings. These will be roughly one hour in length, and are to discuss status updates on all aspects of the team. These take place every two weeks, and meeting dates and times will be posted on slack. You are expected to attend if you have a current task, or update a team lead on the project status prior to the meeting.</p>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>Why join?</h1>
        <p className="bodyText">Why not?</p>
        <p className="bodyText">If you love to innovate, create, and want to be part of a team that  designs UAVs like Hex and Boreas from scratch, then this is the place for you!</p>
        <p className="bodyText">Show your family and friends the amazing things you’re capable of, dazzle employers with your sparking new résumé addition, make connections that last a lifetime, and lay your hands on some pretty cool technology. What are you waiting for?</p>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>What do I need to know?</h1>
        <p className="bodyText">Nothing!</p>
        <p className="bodyText">No seriously, nothing! Most of us came in with no experience or knowledge of this stuff. As long as you’re willing to learn, you’ll fit right in!</p>
        <p className="bodyText">You can learn vision systems, control systems, mechanical design, systems integration, real-time software, and marketing. Pick your poison!</p>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>What are the different teams?</h1>
        <p className="bodyText">Here at WARG, our team is split into four sub-teams. There’s the mechanical, electrical/hardware, software, and business teams. You’re welcome to join any of these, no matter what faculty you’re in. You can even join multiple teams if you like.</p>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>How much time do I need to invest?</h1>
        <p className="bodyText">As much as you want to! The minimum time investment is going to the meetings. Other than that, feel free to put in as much time as you want.</p>
      </div>
    </div>
    <div className="row bodyHeaderHolder">
      <div className="col-md-7 col-12">
        <h1>Who runs WARG?</h1>
        <p className="bodyText">The members of WARG all work together to make sure things run smoothly, with additional help from team leads. The team leads are a group of WARG members who have dedicated their time and effort to winning the upcoming competition.</p>
        <p className="bodyText">Team leads have a little extra responsibility, as they handle the finances and accounts, run the meetings, help out new members, and decide on the team direction. You can become a team lead once you meet the following criteria:</p>
        <ul>
          <li style={{marginBottom: ".5em"}} className="bodyText">You want some extra responsibility</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">You are in Waterloo (on campus or work term)</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">You enjoy voicing your opinion and making clutch decisions</li>
          <li style={{marginBottom: ".5em"}} className="bodyText">You have been a member of WARG for a while and thus possess the background knowledge about the current project to give effective guidance to other members</li>
        </ul>
      </div>
    </div>
  </div>
)

export default JoinPage;
