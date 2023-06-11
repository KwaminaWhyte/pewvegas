import React from "react";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", url: "#home" },
  { name: "Services", url: "#services" },
  { name: "Contact", url: "#contact" },
];

export default function Navigation() {
  return (
    <div className="flex h-20 w-screen bg-white/90 dark:bg-black/70 dark:text-white fixed border-b border-gray-800 items-center ">
      <div className="md:w-[87%] flex justify-between mx-auto">
        <div className="ml-3 flex-1">
          <img src={logo} alt="logo" className="w-20 h-20" />
        </div>

        <div className="flex mr-3 flex-1 items-center justify-end">
          {links.map((link) => (
            <a
              href={link?.url}
              className="md:mx-3 mx-1.5 md:text-base text-sm font-medium"
            >
              {link?.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
