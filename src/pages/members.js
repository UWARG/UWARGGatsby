import React from 'react';
import Link from 'gatsby-link';

const MembersPage = () => (
  <div className="container-fluid paddingLeft">
    <div style={{marginTop: "3em", marginBottom: "3em"}} className="row">
      <div className="col-md-6 col-12">
        <h1>Core Members</h1>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img style={{width: "100%"}} className="img-fluid mobileSmallMarginBottom" src="ian.png" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Ian Frosst&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Team Lead</span></h3>
        <p className="bodyText">Ian has been a member of WARG since the fall of 2016, focusing mainly on developing the software for WARG’s autopilot board. As a team lead, Ian works on multiple projects with everyone on the team. He also manages team logistics, finances, and recruitment. Ian is currently in his second year of Mechatronics Engineering.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img style={{width: "100%"}}  className="img-fluid mobileSmallMarginBottom" src="stephen.png" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Stephen Cholvat&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Team Lead</span></h3>
        <p className="bodyText">Stephen has been a member of WARG since the fall of 2015. Along with being a team lead, he works closely with the electrical team and often does work in embedded software as well. Stephen will be going into his third year of studying Computer Engineering in the spring.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img style={{width: "100%"}}  className="img-fluid mobileSmallMarginBottom" src="mark.png" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Mark Dunk&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Mechanics Lead</span></h3>
        <p className="bodyText">Mark has been a member of WARG since 2015. He works on the mechanical aspects of WARG’s aircraft, as well as system integration and team logistics. Mark is currently completing his third year of Legal Studies.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img style={{width: "100%"}}  className="img-fluid mobileSmallMarginBottom" src="serge.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Serge Babayan&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Software and Electrical Lead</span></h3>
        <p className="bodyText">Serge joined WARG in the fall of 2014, working with the software and electrical teams. His primary projects for the group include developing ground station and working on WARG’s custom autopilot board. Serge is currently in his third year of Mechatronics Engineering.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img className="img-fluid mobileSmallMarginBottom" src="benjamin.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Benjamin Winger&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Computer Vision Lead</span></h3>
        <p className="bodyText">Benjamin joined WARG in the fall of 2014. He is the computer vision lead, dedicating his time to developing the computer vision system. Benjamin is currently in his fourth year of Computer Science.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img style={{width: "100%"}}  className="img-fluid mobileSmallMarginBottom" src="annie.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Annie LePage&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Team Safety Captain</span></h3>
        <p className="bodyText">Annie has been a member of WARG since the fall of 2017. She works with both the mechanical and electrical teams, while also being WARG’s Safety Captain. Annie is currently in her second year of Systems Design Engineering.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img className="img-fluid mobileSmallMarginBottom" src="roman.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Roman Boychuk&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}></span></h3>
        <p className="bodyText">Roman has been a member of the WARG team since the winter of 2017. He is part of the mechanical team, working on WARG’s newest plane and current competition hexacopter. Roman will be starting his third year of Mechanical Engineering in the spring</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img className="img-fluid mobileSmallMarginBottom" src="michael.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Michael Lenover&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}></span></h3>
        <p className="bodyText">Michael joined WARG in the fall of 2016,  working with the mechanical team. Michael will be starting his third year of studying Mechanical Engineering in the spring.</p>
      </div>
    </div>
  </div>
)

export default MembersPage;
