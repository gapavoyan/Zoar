import React from "react";
function Footer() {
  return (
    <div id="footer">
      <footer className=" items-center bg-[#002366] ">
        <div className="px-[10vw] py-[4vw] flex justify-between ">
          <div>
            <img
              src="/images/footer.png"
              className="h-full w-[4.8437vw] max-sm:w-[60px] max-sm:h-[65px] max-md:w-20 max-md:h-24"
            />
          </div>
          <div className="flex flex-col items-end ">
            <a className="text-white font-normal max-mijin:text-[14px]">
              zoar.am
            </a>
            <a
              className="text-white font-normal max-mijin:text-[14px]"
              href="tel:+374 41 22 12 05"
            >
              +374 41 22 12 05
            </a>
            <a className="text-white font-normal max-mijin:text-[13px]">
              root.construct.armenia@gmail.com
            </a>
            <div className="flex  justify-end gap-x-2 pt-1 ">
              <i className="fa-brands fa-facebook-f w-[20px] h-[20px] text-white"></i>
              <i className="fa-brands fa-instagram w-[20px] h-[20px] text-white"></i>
              <i className="fa-solid fa-globe w-[20px] h-[20px] text-white"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
