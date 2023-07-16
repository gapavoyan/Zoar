import React from "react";
import SliderDiscription from "../../Components/sliders/sliderDiscription";

function PartsOfTheBuilding() {
  return (
    <div id="building">
      <div className="border-[black] mt-[160px]">
        <div className="flex justify-center">
          <h1 className="text-4xl text-[#002366] font-sans font-extrabold max-sm:text-[30px]">
            ՇԵՆՔԻ ԿԱՌՈՒՑՎԱԾՔԸ
          </h1>
        </div>
        <SliderDiscription />
      </div>
    </div>
  );
}

export default PartsOfTheBuilding;
