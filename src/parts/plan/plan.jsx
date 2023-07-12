import React from "react";
import PlanList from "./planList";
function Plan() {
  return (
    <div>
      <div className="border-[black] mt-[160px]">
        <div className="mb-[80px]">
          <div className="flex justify-center">
            <h1 className="text-[40px] text-[#002366] font-sans font-extrabold text-center max-sm:text-[30px]">
              Հատակագծեր
            </h1>
          </div>
          <div className="pt-[35px] text-center ">
            <p className="text-[#002366]">
              Ստորև կարող եք ընտրել ներքին հարդարման Ձեզ առավել հարմար փաթեթը։
            </p>
          </div>
        </div>
        <div className="h-[240px] bg-[#002366]">
          <div className="py-[10px] px-[200px]">
            <PlanList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
