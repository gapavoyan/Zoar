import React from "react";
import DiscriptionList from "./DiscriptionList";

function BuildingDiscription() {
  return (
    <div>
      <div className="border-[black] mt-[160px]">
        <div className="flex justify-center">
          <h1 className="text-[40px] text-[#002366] font-sans font-extrabold text-center max-sm:text-[30px]">
            ՇԵՆՔԻ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ
          </h1>
        </div>
        <div>
          <DiscriptionList />
        </div>
      </div>
    </div>
  );
}

export default BuildingDiscription;
