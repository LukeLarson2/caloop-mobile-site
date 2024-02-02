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
  return (
    <div className="flex fixed sm:items-end sm:justify-between xs:justify-between xs:items-end bg-white w-full text-xl p-4 sm:h-32 xs:h-32 shadow-md shadow-slate-600 z-20">
      {showMenu && <DropDown onClose={handleCloseMenu} />}
      <div
        style={{
          backgroundImage: "url(/assets/images/caloop_mobile_llcdark_logo.png)",
        }}
        className="flex xl:w-64 xl:h-20 sm:w-32 xs:w-24 xs:h-8 bg-center bg-no-repeat bg-contain"
      />
      <div className="flex justify-end items-center xs:w-32 xs:h-10">
        <a
          href={`tel:${phoneNumber}`}
          style={{
            backgroundImage: "url(/assets/images/dark_contact.png)",
          }}
          className="flex xl:w-64 xl:h-20 sm:w-6 xs:w-6 xs:h-6 bg-center bg-no-repeat bg-contain xs:mr-6"
        ></a>
        {showMenu ? (
          <IoCloseSharp
            className="text-primary xs:w-8 xs:h-8"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <GiHamburgerMenu
            className="text-primary xs:w-8 xs:h-8"
            onClick={() => setShowMenu(true)}
          />
        )}
      </div>
    </div>
  );
}
