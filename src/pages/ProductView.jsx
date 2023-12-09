import { useGetSingleProductQuery } from "../redux/features/product/productApi";

const ProductView = () => {
  const { data, error, isLoading } = useGetSingleProductQuery();
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <p>product view</p>
    </div>
  );
};

export default ProductView;
