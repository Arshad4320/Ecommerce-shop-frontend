import axios from "axios";
import { useEffect, useState } from "react";
import BestSellProdut from "./BestSellProdut";

const BestSellProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("bestsellproduct.json").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <p className="text-5xl text-center text-secondary py-14 font-semibold">
        Our Best Sell Products
      </p>
      <div className="grid grid-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 gap-5 ">
        {data.map((data) => (
          <BestSellProdut data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default BestSellProducts;
