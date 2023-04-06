import React from "react";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", url: "#home" },
  { name: "Services", url: "#services" },
  { name: "Contact", url: "#contact" },
];

export default function Navigation() {
  return (
    <div className="flex h-20 w-full bg-white/90 dark:bg-black/70 dark:text-white fixed border-b border-gray-800 items-center ">
      <div className="ml-5 ">
        <img src={logo} alt="logo" className="w-24 h-24" />
      </div>

      <div className="ml-auto mr-3">
        {links.map((link) => (
          <a href={link?.url} className="mx-3 font-semibold">
            {link?.name}
          </a>
        ))}
      </div>
    </div>
  );
}
