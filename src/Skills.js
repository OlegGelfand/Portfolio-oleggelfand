import React from "react";
import { Breakpoint } from "react-socks";

function Skills() {
  return (
    <div>
<Breakpoint medium up>      
      <div className="main-skills-container">
          <p className="skills-title"><span>skills</span></p>
     
    <div className="skills-container">
        
      <div className="skills">
        <h3 className="title">Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML5/CSS3</li>
          <li>SQL</li>
          <li>ES6</li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Libraries</h3>
        <ul>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Axios</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Django</li>
          <li>Express</li>
          <li>Node</li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Databases</h3>
        <ul>
          <li>PostreSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <div className="skills">
        <h3 className="title">Collaboration</h3>
        <ul>
          <li>Slack</li>
          <li>Zoom</li>
          <li>Skype</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
    </div>
    </Breakpoint>
    <Breakpoint small down>
    <div className="main-skills-container-mobile">
          <p className="skills-title-mobile"><span>skills</span></p>
     
    <div className="skills-container-mobile">
        
      <div className="skills-mobile">
        <h3 className="title-mobile">Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML5/CSS3</li>
          <li>SQL</li>
          <li>ES6</li>
        </ul>
      </div>
      <div className="skills-mobile">
        <h3 className="title-mobile">Libraries</h3>
        <ul>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Axios</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="skills-mobile">
        <h3 className="title-mobile">Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Django</li>
          <li>Express</li>
          <li>Node</li>
        </ul>
      </div>
      <div className="skills-mobile">
        <h3 className="title-mobile">Databases</h3>
        <ul>
          <li>PostreSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
        </div>
      </div>
      <div className="skills-mobile">
        <h3 className="title-mobile">Collaboration</h3>
        <ul>
          <li>Slack</li>
          <li>Zoom</li>
          <li>Skype</li>
          <li>Github</li>
        </ul>
      </div>
   
    </div>
    </Breakpoint>
    </div>
  );
}

export default Skills;
