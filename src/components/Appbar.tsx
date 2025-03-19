"use client";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const menus = [
  {
    menu: "Home",
    path: "/",
  },
  {
    menu: "Technology",
    path: "#technology",
  },
  {
    menu: "Our Brands",
    path: "#brands",
  },
  // {
  //   menu: "Leadership",
  //   path: "#leadership",
  // },
  {
    menu: "Contact",
    path: "#contact",
  },
];

const Appbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-black text-white py-5 lg:py-0 fixed w-full mx-auto z-20">
      <div className="container mx-auto px-4 flex lg:justify-center justify-end">
        {/* Desktop Menu */}
        <div className="lg:flex items-center justify-center py-4 hidden">
          <ul className="flex items-center lg:space-x-12">
            {menus.map((menu, idx) => (
              <li
                key={idx}
                className={`list-none font-normal text-base relative hover:text-white text-gray-300 ${
                  idx !== menus.length - 1
                    ? "lg:after:content-[''] lg:after:block lg:after:w-[1px] lg:after:h-4 lg:after:bg-gray-300 lg:after:absolute lg:after:right-[-1.5rem] lg:after:top-[0.5rem] lg:after:transform lg:after:-translate-y-1/2"
                    : ""
                }`}
              >
                <Link href={menu.path}>{menu.menu}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          {!isOpen ? (
            <CgMenuRight
              className="text-white"
              size={30}
              onClick={() => setIsOpen(true)}
            />
          ) : (
            <IoClose
              className="text-white"
              size={30}
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black z-50 transition-all duration-500 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Close Icon Inside Mobile Menu */}
          <div className="absolute top-5 right-4">
            <IoClose
              className="text-white"
              size={30}
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-6">
              {menus.map((menu, idx) => (
                <li
                  key={idx}
                  className="list-none font-normal text-2xl hover:text-white text-gray-300"
                >
                  <Link href={menu.path} onClick={() => setIsOpen(false)}>
                    {menu.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;