import dataPackage from "../../Components/dataBase/dataPackage";

function PackageList() {
  return (
    <div className="grid max-sm:grid-cols-1  sm:grid-cols-2 md:grid-cols-3  px-[10.416vw] text-center  custom:bg-red-300">
      {dataPackage.map((el) => {
        return (
          <div
            key={el.id}
            className="group text-center border-r-2 border-[#002366] mt-[80px]"
          >
            <h1 className="text-[#002366] text-[32px] group-hover:font-bold ">
              {el.title}
            </h1>
            <div className="group flex justify-center items-center py-10">
              <img
                src="https://zoar.am/_vercel/image?url=/images/icons/minus.svg&w=1536&q=100"
                alt="Hover Image"
                className="group-hover:hidden block w-[50px] aspect-square"
              />
              <img
                src="https://zoar.am/_vercel/image?url=/images/icons/plus.svg&w=1536&q=100"
                alt="Hover Image"
                className="group-hover:block hidden w-[50px] aspect-square"
              />
            </div>
            <ul>
              {el.items.map((el) => (
                <li
                  dangerouslySetInnerHTML={{ __html: el }}
                  className="text-[#002366]"
                />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default PackageList;
