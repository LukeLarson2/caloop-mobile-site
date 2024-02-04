"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import DropDown from "./DropDown";
import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const phoneNumber = "541-868-5398";

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const links = [
    { name: "OUR MISSION", location: "mission" },
    { name: "PORTFOLIO", location: "portfolio" },
    { name: "FEATURES", location: "features" },
    { name: "MAKE AN APPOINTMENT", location: "contact" },
  ];

  const handleClick = (location: string) => {
    handleCloseMenu();

    const section = document.getElementById(location);
    if (section) {
      const offsetTop = section.offsetTop - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex fixed top-0 left-0 sm:items-end sm:justify-between xl:px-24 xl:items-center xs:justify-between xs:items-end bg-white w-dvw text-xl p-4 sm:h-32 xs:h-18 shadow-md shadow-slate-600 z-20">
      <div
        style={{
          backgroundImage: "url(/assets/images/caloop_mobile_llcdark_logo.png)",
        }}
        className="flex xl:w-64 xl:h-20 sm:w-32 xs:w-24 xs:h-8 bg-center bg-no-repeat bg-contain cursor-pointer"
        onClick={() => handleClick("header")}
      />
      <div className="flex justify-end items-center xl:w-full xs:w-32 xs:h-10 xl:items-baseline">
        <div className="hidden xl:flex w-fit ">
          <a
            aria-label="Contact Caloop Mobile by phone"
            href={`tel:${phoneNumber}`}
            className="text-night opacity-75 px-4 w-fit flex flex-nowrap items-center cursor-pointer hover:opacity-50 transition-opacity absolute top-6 right-24 duration-500"
          >
            <div
              style={{
                backgroundImage: "url(/assets/images/dark_contact.png)",
              }}
              className="flex xl:w-4 xl:h-4 bg-center bg-no-repeat bg-contain mr-2"
            />
            541-868-5398
          </a>
          {links.map((link) => {
            return (
              <div
                key={link.name}
                className="h-16 flex items-center w-auto flex-nowrap"
                onClick={() => handleClick(link.location)}
              >
                <h1 className="text-night px-4 w-fit flex flex-nowrap  cursor-pointer hover:opacity-50 transition-opacity duration-500">
                  {link.name}
                </h1>
              </div>
            );
          })}
        </div>
        <a
          aria-label="Contact Caloop Mobile by phone"
          href={`tel:${phoneNumber}`}
          style={{
            backgroundImage: "url(/assets/images/dark_contact.png)",
          }}
          className="flex xl:w-64 xl:h-20 sm:w-6 xs:w-6 xs:h-6 bg-center bg-no-repeat bg-contain xs:mr-6 xl:hidden"
        ></a>
        {showMenu ? (
          <>
            <IoCloseSharp
              className="text-primary xs:w-8 xs:h-8 xl:hidden"
              onClick={() => setShowMenu(false)}
            />
            <DropDown onClose={handleCloseMenu} />
          </>
        ) : (
          <>
            <GiHamburgerMenu
              className="text-primary xs:w-8 xs:h-8 xl:hidden"
              onClick={() => setShowMenu(true)}
            />
          </>
        )}
      </div>
    </div>
  );
}
