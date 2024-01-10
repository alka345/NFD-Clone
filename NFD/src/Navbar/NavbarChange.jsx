import React from "react";

import Navbar from "./Navbar";

const NavbarChange =( )=>{
  const [color , setColor ]=useState(false);

  const changeColor =()=>{

      if(window.scrollY >=60){

          setColor(true);
        }
        else{
          setColor(false);
        }

  };
}

window.addEventListener('scroll',changeColor)

return(
    
     <div>
        <Navbar></Navbar>
    </div>
)


export default NavbarChange