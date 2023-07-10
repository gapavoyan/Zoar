import React from "react";
import descriptionSlider from "../../Components/dataBase/buildingDiscription";
function DiscriptionList() {
  return (
    <div className="grid grid-cols-1 mt-[80px] md:grid-cols-2 px-[10.64vw] gap-4">
      <div className="flex items-center">
        <ul className="list-disc ">
          {descriptionSlider.map((el) => {
            return (
              <li
                className="list-inside text-[#002366]"
                key={el.id}
                dangerouslySetInnerHTML={{ __html: el.list_item }}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <img
          src="/public/images/vector.png"
          className="w-[500px] h-[500px] mijin:w-[700px] mijin:h-[700px] max-sm:w-[300px] max-sm:h-[300px]"
        />
      </div>
    </div>
  );
}

export default DiscriptionList;
