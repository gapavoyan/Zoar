import React, { useState } from "react";
import plan from "../../Components/dataBase/plan";
function PlanList() {
  const [activePlan, setActivePlan] = useState(plan[0]);
  const onMouseEnter = (item) => {
    setActivePlan(item);
  };
  return (
    <div className="flex justify-between gap-x-3">
      <div>
        {plan.map((item) => (
          <div
            key={`plan-${item.id}`}
            onMouseEnter={() => onMouseEnter(item)}
            className="p-3 border border-purple-700"
          >
            <img src={item.link} />
            <p>{item.home}</p>
            <p>{item.corridor}</p>
            <p>{item.closet}</p>
            <p>{item.bedroom2}</p>
            <p>{item.bedroom}</p>
            <p>{item.bathroom2}</p>
            <p>{item.bathroom}</p>
            {item.livingRoomKitchen && <p>{item.livingRoomKitchen}</p>}
            {item.livingRoom && <p>{item.livingRoom}</p>}
            {item.kitchen && <p>{item.kitchen}</p>}
            {item.closet && <p>{item.closet}</p>}
            {item.balcony && <p>{item.balcony}</p>}
          </div>
        ))}
      </div>
      <div>
        <img src={activePlan.link} />
        <p>{activePlan.home}</p>
        <p>{activePlan.corridor}</p>
        <p>{activePlan.closet}</p>
        <p>{activePlan.bedroom2}</p>
        <p>{activePlan.bedroom}</p>
        <p>{activePlan.bathroom2}</p>
        <p>{activePlan.bathroom}</p>
        {activePlan.kitchen && <p>{activePlan.kitchen}</p>}
        {activePlan.livingRoom && <p>{activePlan.livingRoom}</p>}
        {activePlan.livingRoomKitchen && <p>{activePlan.livingRoomKitchen}</p>}
        {activePlan.closet && <p>{activePlan.closet}</p>}
        {activePlan.balcony && <p>{activePlan.balcony}</p>}
      </div>
    </div>
  );
}
export default PlanList;
