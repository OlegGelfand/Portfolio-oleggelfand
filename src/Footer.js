import React from "react";
import { Breakpoint } from "react-socks";
function Footer() {
    // const [display, setDisplay] = useState(false);

    // const handleDisplayAboutMe = () => {
    //   setDisplay(false);
    // };
    // const handleHideAboutMe = () => {
    //   setDisplay(true);
    // };
  return (
    <Breakpoint medium up>
   <footer>
   
    <i class="far fa-copyright"></i> Oleg Gelfand
    
      </footer>
      </Breakpoint>
  );
}

export default Footer;
