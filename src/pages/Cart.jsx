/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = ({ item }) => {
  const { productId, quantity } = item;
  const [count, setCount] = useState(quantity);
  const totalPrice = count * productId.price;
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className=" m-3 flex justify-around flex-wrap max-w-7xl mx-auto border-l-primary border-b-2 border-l-4 p-3 rounded-md">
        <div className=" h-[100px]  w-full  md:w-[150px] lg:w-[150px]  mr:0 md:mr-8 lg:mr-8  relative group overflow-hidden">
          <img
            className="w-full h-full rounded-md  transition-transform transform duration-700 scale-100 group-hover:scale-110 ease-in-out object-cover"
            src={productId.image}
            alt=""
          />
        </div>
        <div className=" text-gray-600    text-lg">
          <p className="  font-semibold  ">{productId.description}</p>
          <p className=" font-semibold ">
            price: <span className="text-primary">{productId.price}</span>
          </p>
          <p className="font-semibold">
            Total Price : <span className="text-primary">{totalPrice}</span>
          </p>
        </div>
        <div className="  text-gray-600 text-xl flex items-center justify-center">
          <button onClick={decrement} className=" text-primary  ">
            <FaMinus />
          </button>
          <span className="text-primary px-3 text-2xl ">{count}</span>
          <button onClick={increment} className="text-xl text-primary  ">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
