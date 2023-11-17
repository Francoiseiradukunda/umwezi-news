import { Carousel } from "antd";
import React from "react";
import pc1 from "../assets/image/planet.jpeg";
import pic2 from "../assets/image/bio.jpeg";
import pic3 from "../assets/image/cool.jpeg";
import pic4 from "../assets/image/home.jpeg";
import pic5 from "../assets/image/nature.jpeg";
import pic6 from "../assets/image/obligation.jpeg";
import pic7 from "../assets/image/back.jpeg";
import pic8 from "../assets/image/only.jpeg";
import pic9 from "../assets/image/denger.jpeg";
import pic10 from "../assets/image/newgen.jpeg";

const Forest=()=>{
    return(
        <>
        <div className="heder">
<h1>importnat to take care of our invironment</h1>
</div>
<Carousel autoplay={true} autoplaySpeed={1000} dotPosition="right" fade={true}>
    <div className="per">
        <h3>01. Planet earth is beautiful</h3>
    <img src={pc1} alt="open" />
    </div>

    <div className="per">
        <h3>02. Protect biodiversity</h3>
    <img src={pic2} alt="open" />
    </div>

    <div className="per">
        <h3>03. Caring is cool</h3>
    <img src={pic3} alt="open" />
    </div>

    <div className="per">
        <h3>04. Our only home</h3>
    <img src={pic4} alt="open" />
    </div>

    <div className="per">
        <h3>05. What we do to nature affects ourselves</h3>
    <img src={pic5} alt="open" />
    </div>

    <div className="per">
        <h3>06. Its our moral obligation</h3>
    <img src={pic6} alt="open" />
    </div>

    <div className="per">
        <h3>07. A way to give back</h3>
    <img src={pic7} alt="open" />
    </div>

    <div className="per">
        <h3>08. Our only home</h3>
    <img src={pic8} alt="open" />
    </div>

    <div className="per">
        <h3>09. The environment is in danger</h3>
    <img src={pic9} alt="open" />
    </div>

    <div className="per">
        <h3>10. Future generations</h3>
    <img src={pic10} alt="open" />
    </div>
</Carousel>
        </>

    )
}
export default Forest;