import { useGetCartQuery } from "../redux/features/cart/cartApi";
import Cart from "./Cart";

const Carts = () => {
  const { data, error, isLoading } = useGetCartQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <div>
        {data.data.map((item) => (
          <Cart item={item} key={item._id} />
        ))}
      </div>

      <button className="bg-white text-primary mt-2 ml-2 px-2 py-2 rounded-md hover:bg-primary hover:text-white border border-primary  transition-transform duration-300 ease-in-out transform  ">
        Order Place
      </button>
    </div>
  );
};

export default Carts;
