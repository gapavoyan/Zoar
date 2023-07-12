import React, { useState } from "react";
import plan from "../../Components/dataBase/plan";
function PlanList() {
  const [activePlan, setActivePlan] = useState(plan[0].id);
  const onMouseEnter = (item) => {
    setActivePlan(item);
  };
  return (
    <div className="grid grid-cols-2 shadow-2xl bg-white mt-[120px]">
      <div className="grid grid-cols-3 gap-[40px] p-[60px]">
        {plan.map((item) => (
          <div
            key={`plan-${item.id}`}
            onMouseEnter={() => onMouseEnter(item)}
            className={`p-3 border border-[#002366]  w-[160px] ${
              activePlan.id === item.id ? "opacity-100" : "opacity-60"
            }`}
          >
            <img src={item.link} className="w-auto h-auto" />
            <p>{item.id}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 pt-[80px]">
        <div>
          <img src={activePlan.link} />
        </div>
        <div className="mt-[80px]">
          {Object.keys(activePlan).map((key) =>
            activePlan[key] && !["link"].includes(key) ? (
              <p>{activePlan[key]}</p>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
export default PlanList;
