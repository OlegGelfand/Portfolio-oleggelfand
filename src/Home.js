import React from "react";
import NavTop from "./NavTop";
import Footer from "./Footer";
import Skills from "./Skills";
import ProjectList from "./ProjectList";
import Resume from "./Resume";
import { Breakpoint } from "react-socks";
import About from "./About";
function Home() {
  return (
    <div>
      
      <NavTop />
      <Skills />
       <Breakpoint small down>
      <ProjectList />
      <About />
 
      </Breakpoint>
      <Resume />
      <Footer />
     
    </div>
  );
}

export default Home;
