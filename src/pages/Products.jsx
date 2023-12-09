import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../redux/features/product/productApi";
import { useCreateCartMutation } from "../redux/features/cart/cartApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const [cartData] = useCreateCartMutation();
  const { data, error, isLoading } = useGetAllProductQuery();
  const notify = () => toast("Product Added!");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const addToCart = async (productId) => {
    const result = await cartData({ productId }).unwrap();
    console.log("cart", result);
  };

  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7 max-w-7xl mx-auto px-2 lg:px-0">
      {data.data.map((item) => (
        <div className=" shadow-md rounded-md " key={item._id}>
          <div>
            <div className=" h-[300px] relative group overflow-hidden">
              <img
                className="w-full h-full rounded-t-md  transition-transform transform duration-700 scale-100 group-hover:scale-110 ease-in-out object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <p className=" mt-1 text-lg text-gray-600 px-2">
              {item.description}
            </p>
            <div className="flex  my-1 text-primary font-semibold text-xl px-2">
              <p className="mr-4 text-xl ">{item.name}</p>
              <p className="">{item.price}</p>
            </div>
          </div>
          <div className="flex justify-between  mt-5 px-2 pb-3">
            <button
              onClick={() => {
                addToCart(item._id);
                notify();
              }}
              className="bg-white text-primary px-2 py-2 rounded-md hover:bg-primary hover:text-white border border-primary transition-transform duration-300 ease-in-out transform"
            >
              Add To Cart
            </button>

            <ToastContainer
              position="top-center"
              autoClose={1000}
              type="success"
            />
            <Link
              to={`/product/get-product`}
              className="bg-white text-primary px-2 py-2 rounded-md hover:bg-primary hover:text-white border border-primary  transition-transform duration-300 ease-in-out transform  "
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
