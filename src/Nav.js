import React from "react";
// import { Link } from "react-router-dom";
// import Resume from "./Resume";
import { Breakpoint } from "react-socks";
function Nav() {
  return (
   <div>
     <Breakpoint medium up>
      <div className="nav">
        
        <div className="item1">
          <p className="box-1"></p>
        </div>
        <div className="item1">
        </div>
        <div className="item1">
        </div>
        </div>
        </Breakpoint>
        <Breakpoint small down>
        <div className="nav-mobile">
        <div className="item1-mobile">
          <p className="box-1-mobile"></p>
        </div>
        <div className="item1-mobile">
        </div>
        <div className="item1-mobile">
        </div>          
        </div>
        
      
      </Breakpoint>
      </div>
  );
}

export default Nav;
