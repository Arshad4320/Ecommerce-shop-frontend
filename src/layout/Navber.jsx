import { Link } from "react-router-dom";
import MobileNavber from "./MobileNavber";
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
        to="/destination"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Destination
      </Link>

      <Link
        to="/login"
        className="text-secondary text-xl font-semibold hover:text-teal-600 py-3"
      >
        Login
      </Link>

      <button className="text-white px-5 py-2 rounded-md bg-secondary">
        Logout
      </button>
    </>
  );

  return (
    <div className="">
      {/* single nav */}
      <div className="  shadow-sm  xl:hidden lg:hidden md:block sm:block top-0  fixed  left-0 right-0 z-50 ">
        <MobileNavber />
      </div>
      {/* main navbar */}
      <div className="hidden sm:hidden md:hidden lg:block xl:block ">
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
