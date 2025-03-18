import Link from "next/link";

const menus = [
  {
    menu: "Home",
    path: "/",
  },
  {
    menu: "Technology",
    path: "/",
  },
  {
    menu: "Our Brands",
    path: "/",
  },
  {
    menu: "Leadership",
    path: "/",
  },
  {
    menu: "Contact",
    path: "/",
  },
];

const Appbar = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          {/* Menu items */}
          <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            {menus.map((menu, idx) => (
              <li
                key={idx}
                className={`list-none font-normal text-base relative ${
                  idx !== menus.length - 1
                    ? "lg:after:content-[''] lg:after:block lg:after:w-[1px] lg:after:h-4 lg:after:bg-gray-300 lg:after:absolute lg:after:right-[-1.5rem] lg:after:top-[0.5rem] lg:after:transform lg:after:-translate-y-1/2"
                    : ""
                }`}
              >
                <Link href={menu.path} className="hover:text-blue-500">
                  {menu.menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appbar;