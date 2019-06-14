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
        <img style={{width: "100%"}} className="img-fluid mobileSmallMarginBottom" src="annie.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Annie LePage&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Team Lead</span></h3>
        <p className="bodyText">Annie has been a member of the team since fall 2017. Currently her focus is recruitment and development of the firmware for the new autopilot boards, although past projects have ranged from PCB design to mechanical design. Annie is enrolled in Systems Design Engineering</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img style={{width: "100%"}}  className="img-fluid mobileSmallMarginBottom" src="elton.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Elton Tang&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Finance Lead</span></h3>
        <p className="bodyText">Elton has been a member of WARG since summer 2018. He manages team finances and funding in addition to being a member of the electrical team. Elton is enrolled in Electrical Engineering.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img style={{width: "100%"}}  className="img-fluid mobileSmallMarginBottom" src="lucy.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Lucy Gong&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Safety Captain</span></h3>
        <p className="bodyText">Lucy has been a member of WARG since the winter of 2018. She primarily works with the electrical team and is trying very hard to do firmware, while also being WARG’s Safety Captain. Lucy is currently enrolled in Mechatronics Engineering.</p>
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
        <h3>Serge Babayan&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Advisor</span></h3>
        <p className="bodyText">Serge joined WARG in the fall of 2014, working with the software and electrical teams. Serge has graduated from Mechatronics Engineering, but continues to advise on autopilot work.</p>
      </div>
    </div>
    <div className="row" style={{marginBottom: "4em"}}>
      <div className="col-md-2 col-12">
        <img className="img-fluid mobileSmallMarginBottom" src="roman.jpg" />
      </div>
      <div className="col-md-8 col-12">
        <h3>Roman Boychuk&nbsp;<span className="text-muted" style={{fontSize: ".6em", fontWeight: "400"}}>Advisor</span></h3>
        <p className="bodyText">Roman joined WARG in the winter of 2017. His main contributions were to the mechanical team, and he remains an advisor as he focuses on Capstone design. Roman will be graduating from Mechanical Engineering in May of 2020</p>
      </div>
    </div>
  </div>
)

export default MembersPage;
