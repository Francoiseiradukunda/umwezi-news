import React from "react";
import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
import  Button  from "./button";

function Header(){
   
    return(
        <>
<div className="nav">
    <div className="logo">
        <img src={logo} alt="environmental" />
    </div>

    <div className="metion">
        <ul className="cat">
            <li>
                <a href="@" className="nav-links">home</a>
            </li>

            <li>
                <a href="@" className="nav-links">important</a>
            </li>

            <li>
                <a href="@" className="nav-links">effect</a>
            </li>

            <li>
                <a href="@" className="nav-links">conclusion</a>
            </li>

            <li>
                <Button name="Sign Up"/>
            </li>


            <li>
               <Button name="Login"/>
            </li>

        </ul>
    </div>
</div>
</>
    );

}
export default Header;