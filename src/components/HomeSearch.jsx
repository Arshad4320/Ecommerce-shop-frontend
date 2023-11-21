import { useState } from "react";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

const HomeSearch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="mx-10 mb-2  hidden md:block lg:block xl:block">
      <div className="flex justify-between flex-wrap ">
        <div className=" border-2 bg-primary text-white w-[33%] flex item-center ml-1 items-center relative  rounded-md">
          <div className="mr-10">
            <button
              onClick={toggleMenu}
              className=" 0 text-white focus:outline-none md:block  flex"
            >
              {isMenuOpen ? (
                <HiMiniXMark className=" h-6 w-6   ml-4   " />
              ) : (
                <div className="text-white">
                  <FaOutdent className=" h-6 w-6   ml-4" />
                </div>
              )}
            </button>
            <div
              className={`${
                isMenuOpen ? "block absolute z-10 w-full " : "hidden"
              } bg-primary  `}
            >
              {/* Menu Content */}
              <div className=" scroll-m-3  ">
                <ul className="space-y-2 text-white p-5 text-lg font-semibold">
                  <li className="">Electronics Collection</li>
                  <li className="">Janes Collection</li>
                  <li className="">Ladies Collection</li>
                  <li className="">Furniture Collection</li>

                  {/* Add more menu items here */}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xl font-semibold">All Category</p>
        </div>

        <div className="w-[33%] flex justify-between">
          <input
            type="text"
            placeholder="Search your favorite product "
            className="border-2 rounded-l-md border-primary h-[61px] border-r-0 w-full"
          />
          <button className="py-4 px-3 bg-primary text-xl rounded-r-md font-semibold text-white">
            Search
          </button>
        </div>
        <div className=" border-2 text-primary border-primary rounded-md w-[33%] flex justify-center items-center">
          <p className="text-xl font-semibold">Friday Offer 10%</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
