"use client";

import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className="flex fixed sm:items-end sm:justify-between xs:justify-between xs:items-end bg-white w-full text-xl p-4 sm:h-32 xs:h-32 shadow-md shadow-black z-20">
      <div
        style={{
          backgroundImage: "url(/assets/images/caloop_mobile_llcdark_logo.png)",
        }}
        className="flex xl:w-64 xl:h-20 sm:w-32 xs:w-24 xs:h-8 bg-center bg-no-repeat bg-contain"
      />
      <div className="flex justify-end items-center xs:w-32 xs:h-10">
        <div
          style={{
            backgroundImage: "url(/assets/images/dark_contact.png)",
          }}
          className="flex xl:w-64 xl:h-20 sm:w-6 xs:w-6 xs:h-6 bg-center bg-no-repeat bg-contain xs:mr-6"
        />
        <GiHamburgerMenu className="text-primary xs:w-8 xs:h-8" />
      </div>
    </div>
  );
}
