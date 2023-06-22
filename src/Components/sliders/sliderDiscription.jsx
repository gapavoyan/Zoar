import React from "react";
import descriptionSlider from "../dataBase/dataDescriptionSlider";
import SliderStructure from "./sliderStructure";
function SliderDiscription() {
  console.log(descriptionSlider);
  return (
    <div>
      <SliderStructure />
      {/* {
            descriptionSlider.map((el)=> <img key={el.id} src={el.urlSlider}/>)
        } */}
    </div>
  );
}

export default SliderDiscription;
