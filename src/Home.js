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
       {/* <Breakpoint medium up> */}
      <NavTop />
      {/* </Breakpoint> */}
      <Skills />
      <Resume />
      <ProjectList />
       <Breakpoint small down>
     
     
      <About />
 
      </Breakpoint>
      
      <Footer />
     
    </div>
  );
}

export default Home;
