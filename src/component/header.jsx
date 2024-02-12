import React from "react";
// import her from "../assets/logo.png";
function Header(){
return(
    <nav>
    <div className="heading">
        {/* <div className="image-container">
<img src={her} alt=""/>
   </div>  */}
    <div className="links">
<ul>
    <li><a href="/Welcome">Home</a></li>
    <li><a href="/Important">Importance</a></li>
    <li><a href="/Effect">Effect</a></li>
    <li><a href="/Measure">Measures</a></li>
    <li><a href="/Conclusion">Conclusion</a></li>
    <li><a href="#">Sign-Up</a></li>
    <li><a href="#">Login</a></li>

</ul>
    </div>
    </div>
    </nav>
)
    };
export default Header;