import React from "react";

const links = [
  { name: "Home", url: "#home" },
  { name: "Services", url: "#services" },
  { name: "Contact", url: "#contact" },
];

export default function Navigation() {
  return (
    <div className="flex h-20 w-full bg-white/90 dark:bg-black/70 dark:text-white fixed border-b border-gray-800 items-center ">
      <p className="ml-5 font-semibold">PewVegas</p>

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
