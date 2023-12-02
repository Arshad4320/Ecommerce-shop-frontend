import { useGetAllProductQuery } from "../redux/features/product/productApi";

const Products = () => {
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
    <div>
      {data.data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
