import { useState } from "react";
import { Link } from "react-router-dom";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import logo from "../assets/logo.png";
const MobileNavber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routing = (
    <>
      <Link
        to="/"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        About
      </Link>
      <Link
        to="/products"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        Products
      </Link>
      <Link
        to="/login"
        className="block  px-4 py-2 font-semibold text-secondary hover:text-teal-500 rounded "
      >
        Login
      </Link>
    </>
  );

  return (
    <div className=" bg-white    p-4 xl:mb-0 lg:mb-0  shadow-md :p-5 xl:p-5 ">
      <div className="flex justify-between    ">
        <button
          onClick={toggleMenu}
          className=" text-gray-900 bg-white focus:outline-none md:block lg:hidden xl:hidden flex"
        >
          {isMenuOpen ? (
            <HiMiniXMark className=" h-6 w-6   ml-4   " />
          ) : (
            <div className="text-secondary">
              <FaOutdent className=" h-6 w-6   ml-4" />
            </div>
          )}
        </button>

        <div className=" sm:block md:block   xl:hidden   font-semibold w-[170px] h-[40px] px-5  rounded-md  lg:hidden ">
          <img className="w-ful h-full" src={logo} alt="" />
        </div>
      </div>
      {/* Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:block xl:block  `}>
        {/* Menu Content */}
        <div className=" scroll-m-3 ">
          <ul className="space-y-2 ">
            <li className="">{routing}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;
