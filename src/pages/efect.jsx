
import React from "react";
import loose from "../assets/imagee/loose.png"
import climate from "../assets/imagee/climate.png";
import water from "../assets/imagee/water.png";
import tree from "../assets/imagee/tree.png";
import soil from "../assets/imagee/soil.png";
import acid from "../assets/imagee/acid.png"
import Button from "../component/button";
function Effect(){
return(
    <>
    <div className="effect-container">
        <div className="hed-cont">
<h1>EFFECT OF ENVIRONMENTAL DENGERING</h1>
        </div>
        <div className="cont1">
<div className="picc-slider">
    <h3>1.Loss of Biodiversity:</h3>
    <img src={loose} alt="not faund" />
    <p>.Habitat destruction, pollution, and climate change contribute to the loss of biodiversity.
.Species may go extinct, disrupting ecosystems and reducing overall ecosystem resilience.</p>
</div>

<div className="picc-slider">
    <h3>2.Climate Change</h3>
    <img src={climate} alt="not faund" />
    <p>.Environmental damage, particularly through activities that release greenhouse gases (e.g., burning fossil fuels), contributes to climate change.
Climate change leads to rising temperatures, more frequent and severe weather events, and disruptions in ecosystems.</p>
</div>
</div>

<div className="cont2">
<div className="picc-slider">
    <h3>3.Air and Water Pollution</h3>
    <img src={water} alt="not faund" />
    <p>Industrial processes, agricultural runoff, and improper waste disposal can contaminate air and water.
Polluted air and water have direct implications for human health, as well as the health of plants and animals.</p>
</div>

<div className="picc-slider">
    <h3>4.Deforestation</h3>
    <img src={tree} alt="not faund" />
    <p>Cutting down forests for agriculture, logging, or urban development leads to the loss of vital habitats.
Deforestation contributes to the release of stored carbon, exacerbating climate change.</p>
</div>
</div>

<div className="cont3">
<div className="picc-slider">
    <h3>5.Soil Degradation</h3>
    <img src={soil} alt="not faund" />
    <p>.Unsustainable farming practices, deforestation, and pollution can lead to soil erosion and degradation.
Degraded soil loses fertility and becomes less productive, affecting agriculture and food security.</p>
</div>

<div className="picc-slider">
    <h3>6.Ocean Acidification</h3>
    <img src={acid} alt="not faund" className="acid"/>
    <p>.Increased carbon dioxide levels in the atmosphere lead to higher levels of carbon dioxide being absorbed by the oceans.
This causes ocean acidification, which can harm marine life, particularly organisms with calcium carbonate shells.</p>
</div>
    </div>
     <Button name="view more" className="eff"></Button>
    </div>
   
    </>
)
}
export default Effect