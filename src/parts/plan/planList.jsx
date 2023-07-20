import React, { useState } from "react";
import plan from "../../Components/dataBase/plan";

function PlanList() {
  const [activePlan, setActivePlan] = useState(plan[0]);
  const onMouseEnter = (item) => {
    setActivePlan(item);
  };
  return (
    <div
      className="content bg-[white] shadow-[0px,3px,20px,3px,rgb(0,0,0,0.5)] w-[81vw] 
      z-10 flex max-size:flex-col max-size:items-center max-size:overflow-hidden"
    >
      <div className="contentData grid grid-cols-3 gap-2 px-[60px] py-[30px] shrink-0 overflow-hidden max-size:flex max-size:overflow-scroll max-size:w-[500px] ">
        {plan.map((item) => (
          <div
            key={`plan-${item.id}`}
            onMouseEnter={() => onMouseEnter(item)}
            className={`flex justify-between shrink-0 p-3 border border-[#002366] w-[8vw] h-[8vw] max-size:w-[12vw] max-size:h-[12vh] ${
              activePlan.id === item.id ? "opacity-100" : "opacity-60"
            }`}
          >
            <img
              src={item.link}
              className="w-[5vw] h-[6vw] object-cover  max-size:w-[10vw] max-size:h-[10vh] shrink-0"
            />
            <div>
              <span className="text-[12px]">{item.id} </span>
            </div>
          </div>
        ))}
      </div>

      <div className=" w-full flex items-center justify-evenly max-sm:justify-between">
        <div className="shrink-0">
          <img
            src={activePlan.link}
            className="w-[20vw] h-[20vh] object-cover"
          />
        </div>
        <div>
          {Object.keys(activePlan).map((key) =>
            activePlan[key] && "link" != key ? (
              <p
                className="max-mijin:text-[14px]"
                key={`plan-list-item-${key}`}
              >
                {activePlan[key]}
              </p>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
export default PlanList;
{
  /* <div className="grid grid-cols-2 shadow-2xl bg-white mt-[120px]">
<div className="grid grid-cols-3 gap-[40px] p-[60px] aspect-square">
  {plan.map((item) => (
    <div
      key={`plan-${item.id}`}
      onMouseEnter={() => onMouseEnter(item)}
      className={`p-3 border border-[#002366] ${
        activePlan.id === item.id ? "opacity-100" : "opacity-60"
      }`}
    >
      <img src={item.link} className="w-auto h-auto" />
      <p>{item.id} </p>
    </div>
  ))}
</div>
<div className="grid grid-cols-1 gap-4 pt-[80px] lg:grid-cols-2">
  <div>
    <img src={activePlan.link} className="max-lg:h-[400px]" />
  </div>
  <div className="mt-[80px] py-[50px]">
    {Object.keys(activePlan).map((key) =>
      activePlan[key] && !["link"].includes(key) ? (
        <p>{activePlan[key]}</p>
      ) : null
    )}
  </div>
</div>
</div> */
}
