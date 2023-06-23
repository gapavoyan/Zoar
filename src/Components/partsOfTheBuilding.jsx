import React from "react";
import SliderDiscription from "./sliders/sliderDiscription";

function PartsOfTheBuilding() {
  return (
    <div>
      <div className="border-[black] mt-[160px]">
        <div className="flex justify-center">
          <h1 className="text-4xl text-[#002366] font-sans font-extrabold">
            ՇԵՆՔԻ ԿԱՌՈՒՑՎԱԾՔԸ
          </h1>
        </div>
        <SliderDiscription />
      </div>
    </div>
  );
}

export default PartsOfTheBuilding;
