import { useState } from "react";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../redux/features/product/productApi";

const HomeSearch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { data, error, isLoading } = useGetAllProductQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Now you can use the `data` variable.
  console.log(data.data);

  return (
    <div className=" mb-2  hidden md:block lg:block xl:block">
      <div className="flex justify-between flex-wrap ">
        <div className=" border-2 bg-primary text-white w-[33%] flex item-center  items-center relative  rounded-md">
          <div className="mr-3">
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
                isMenuOpen ? "block absolute z-10 w-full mt-1" : "hidden"
              } bg-primary  `}
            >
              {/* Menu Content */}
              <div className=" scroll-m-3  ">
                <ul className="space-y-2 text-white py-4 ml-12 text-lg font-semibold">
                  {data.data.map((item) => (
                    <Link
                      to={`/product/get-product-category/${item._id}`}
                      key={item._id}
                    >
                      <li className="">{item?.cetagory?.name}</li>
                    </Link>
                  ))}

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
        <div className=" border-2 text-secondary border-primary rounded-md w-[33%] flex justify-center items-center">
          <p className="text-xl font-semibold">Friday Offer 10%</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
