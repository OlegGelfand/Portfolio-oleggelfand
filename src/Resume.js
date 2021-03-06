import React from "react";
import { Breakpoint } from "react-socks";
function Resume() {

  return (
    <div>
      <Breakpoint medium up>
   <div className="resume">
     <h1 className="pages"> My Pages</h1>
     <ul className="my-docs">
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i className="far fa-file"><span className="res"> Resume </span></i></a></li>
      <li> <a href="https://portfolio-oleg-gelfand.netlify.app/"><p className="portfolio" >P<span className="port">ortfolio</span></p></a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i className="fab fa-linkedin"><span className="linked-in"> Linked In</span></i></a></li>
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i className="fab fa-github"><span className="github"> Github</span></i></a></li>
 </ul> 
   </div>
   </Breakpoint>
   <Breakpoint small down>
   <div className="resume-mobile">
     <h1 className="pages-mobile"> My Pages</h1>
     <ul className="my-docs-mobile">
      <li> <a href="https://docs.google.com/document/d/1vXIsliEyme3tdptIIsl0S2njY9_fpnvdDBnrAOf3kJM/edit?usp=sharing"><i className="far fa-file"><span className="res"> Resume </span></i></a></li>
      <li> <a href="https://portfolio-oleg-gelfand.netlify.app/"><p className="portfolio" >P<span className="port">ortfolio</span></p></a></li>
      <li> <a href="https://www.linkedin.com/in/gelfand-oleg/"><i className="fab fa-linkedin"><span className="linked-in"> Linked In</span></i></a></li>
      <li> <a href="https://github.com/OlegGelfand"><i className="fab fa-github"><span className="github"> Github</span></i></a></li>
 </ul> 
   </div>
   </Breakpoint>
   </div>
  );
}

export default Resume;
