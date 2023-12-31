import { Link } from "react-router-dom";
import MobileNavber from "./MobileNavber";

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaCartArrowDown,
} from "react-icons/fa";
import logo from "../assets/logo.png";
const Navber = () => {
  const routing = (
    <>
      <Link
        to="/"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        About Us
      </Link>

      <Link
        to="/products"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Products
      </Link>

      <Link
        to="/login"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Register
      </Link>
      <Link
        to="/cart/get-cart"
        className="text-secondary text-xl mt-1 font-semibold hover:text-teal-600 py-3"
      >
        <FaCartArrowDown />
      </Link>
    </>
  );

  return (
    <div className="relative z-50 ">
      {/* single nav */}
      <div className="  shadow-sm  xl:hidden lg:hidden md:block sm:block top-0  fixed  left-0 right-0  ">
        <MobileNavber />
      </div>
      {/* main navbar */}
      <div className="hidden sm:hidden md:hidden lg:block xl:block ">
        <div className="bg-primary  py-2">
          <div className="  flex justify-center  space-x-3 ">
            <FaFacebook className="text-xl text-white  rounded-full w-5 h-5" />
            <FaLinkedin className="text-xl text-white  rounded-full w-5 h-5" />
            <FaTwitter className="text-xl text-white  rounded-full w-5 h-5" />
            <FaYoutube className="text-xl text-white  rounded-full w-5 h-5" />
          </div>
        </div>
        <nav className="  py-4  flex justify-between mx-auto max-w-7xl">
          <div className=" flex justify-center items-center ">
            <div className="w-[180px] h-[60px]">
              <img className="w-full h-full" src={logo} alt="" />
            </div>
          </div>
          <div>
            <div className="container ">
              <div className="hidden md:flex space-x-4">{routing}</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navber;
