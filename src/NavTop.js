import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";
// import Skills from "./Skills";
// import Resume from "./Resume";


function NavTop() {
  const [displayHamburger, setDisplayHamburger] = useState(false);
  
  const handleDisplayHamburger = () => {
    setDisplayHamburger(true);
  };
   const handleHideHamburger = () => {
    setDisplayHamburger(false);
  };
  return (
    <header>
      <Breakpoint medium up>
     
        <div className="top" >
          <div className="inner-top">
            my name is Oleg, my friends call me Shua. Welcome to my Portfolio.
          </div>
        </div>
        <div className="top-nav">
          {/* <img className = "top-image" src=""></img> */}
          <div className="top-item">
            <p>
              {" "}
              Let's build something <i className="fas fa-hammer"></i>ogether!
            </p>
          </div>

          <div className="top-item">
            <Link to="/">
              <p>OLEG GELFAND</p>
            </Link>
          </div>
          <div className="top-item">
            <Link to="/projects">
              <p> My Projects</p>
            </Link>
          </div>
          <div className="top-item">
            <Link to="/aboutme">
              <p>
                About <i className="fa fa-male"></i>
                <i className="fa fa-child"></i>
                <i className="fa fa-baby"></i>
                <i className="fa fa-child">
                  <i className="fa fa-female"></i>
                </i>{" "}
                Me
              </p>
            </Link>
            {/* <Skills /> */}
          </div>
        </div>
      </Breakpoint>
      <Breakpoint small down>
    
        <div className="navtop-container-mobile" onClick={handleDisplayHamburger}>
        <button
                onClick={!displayHamburger ? handleDisplayHamburger : handleHideHamburger}
              >
                {" "}
                <h1 className="hamburger-button">Hobbies</h1>{" "}
              
        <div className="top-mobile">
          <div className="inner-top-mobile">
            my name is Oleg, my friends call me Shua. Welcome to my Portfolio.
          </div>
    
        </div>
        <div className="top-nav-mobile">
          {/* <img className = "top-image" src=""></img> */}
          <div className="top-item-mobile">
            <p className="nav-text">
              {" "}
              Let's build something <i className="fas fa-hammer"></i>ogether!
            </p>
          </div>

          <div className="top-item-mobile" id="myLinks">
            <Link to="/">
              <p className="nav-text">OLEG GELFAND</p>
            </Link>
          </div>
          <div className="top-item-mobile">
            <Link to="/projects">
              <p className="nav-text"> My Projects</p>
            </Link>
          </div>
          <div className="top-item-mobile">
            <Link to="/aboutme" id="link">
              <p className="nav-text">
                About <i className="fa fa-male"></i>
                <i className="fa fa-child"></i>
                <i className="fa fa-baby"></i>
                <i className="fa fa-child">
                  <i className="fa fa-female"></i>
                </i>{" "}
                Me
              </p>
            </Link>
            {/* <Skills /> */}
          </div>
       
    <i class="fa fa-bars"></i>

        </div>
        </button>
        </div>
      </Breakpoint>
    </header>
  );
}

export default NavTop;
