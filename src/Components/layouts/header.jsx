import React, { useEffect, useState } from "react";
import { dataHeader } from "../dataBase/dataHeader";
import Drawer from "../drawer/drawer";
function Header() {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(dataHeader);
  }, []);

  return (
    <div>
      <header className="flex items-center">
        <div className="flex xl:py-[30px] h-36 md:py-10 px-[10vw]  justify-between w-full items-center">
          <div>
            <img
              src="/images/zoar-logo.png"
              className="h-full w-[4.8437vw] max-sm:w-[60px] max-sm:h-[65px] max-md:w-20 max-md:h-24"
            />
          </div>
          <div>
            <nav className="hidden md:block">
              <ul className="flex lg:gap-x-16 max-lg:gap-x-8">
                {state.map((el) => (
                  <li
                    key={el.id}
                    className="hover:text-[#0073B6] text-[#AFAEB1] leading-[20px] cursor-pointer"
                  >
                    {el.nav_items}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="max-md:block md:hidden">
            <Drawer />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
