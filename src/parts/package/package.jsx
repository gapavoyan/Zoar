import React from "react";
import PackageList from "./packageList";
function Package() {
  return (
    <div>
      <div className="border-[black] mt-[90px]">
        <div className="flex justify-center">
          <h1 className="text-[40px] text-[#002366] font-sans font-extrabold text-center max-sm:text-[30px]">
            Փաթեթներ
          </h1>
        </div>
        <div className="p-[35px] text-center ">
          <p className="text-[#002366]">
            Ստորև կարող եք ընտրել ներքին հարդարման Ձեզ առավել հարմար փաթեթը։
          </p>
        </div>
        <div>
          <PackageList />
        </div>
      </div>
    </div>
  );
}

export default Package;
