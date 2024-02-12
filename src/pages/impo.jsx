import React from "react";
import { Carousel } from 'antd';
import planet from "../assets/image/planet.png";
import Resource from "../assets/image/resource.png";
import nature from "../assets/image/nuture.png";
import home from "../assets/image/home.png";
import obligation from "../assets/image/obligation.png";
import bio from "../assets/image/bio.png";
import danger from "../assets/image/danger.png";
import cool from "../assets/image/cool.png";
import back from "../assets/image/back.png";
import generation from "../assets/image/generation.png"
function Important(){
    return(
        <>
        <div className="ipot">
            <div className="par">
        <h2>important to take care of our environmental</h2>
        </div>
        <Carousel autoplay="true" autoplaySpeed={1000} className="slider">
      <div className="pic-slider">
        <h3>01. Planet earth is beautiful</h3>
        <img src={planet} alt="not faund" className="planet"/>
      </div>


      <div className="pic-slider">
        <h3>02. Our resources</h3>
        <img src={Resource} alt="not found" className="resource"/>
      </div>


      <div className="pic-slider">
        <h3>03. What we do to nature affects ourselves</h3>
        <img src={nature} alt="not found" className="nature"/>
      </div>


      <div className="pic-slider">
        <h3>04. Our only home</h3>
        <img src={home} alt="not found" className="home"/>
</div>

<div className="pic-slider">
        <h3>05. Its our moral obligation</h3>
        <img src={obligation} alt="not found" className="obligation"/>
</div>

<div className="pic-slider">
        <h3>06. Protect biodiversity</h3>
        <img src={bio} alt="not found" className="bio"/>
</div>

<div className="pic-slider">
        <h3>07. The environment is in danger</h3>
        <img src={danger} alt="not found" className="danger"/>
</div>

<div className="pic-slider">
        <h3>08. Caring is cool</h3>
        <img src={cool} alt="not found" className="cool"/>
</div>

<div className="pic-slider">
        <h3>09. A way to give back</h3>
        <img src={back} alt="not found" className="back"/>
</div>

<div className="pic-slider">
        <h3>10. Future generations</h3>
        <img src={generation} alt="not found" className="genaration"/>
</div>


    </Carousel>
        </div>
        </>
    )
}
export default Important;
