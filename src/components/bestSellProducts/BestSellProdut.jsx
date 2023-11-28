/* eslint-disable react/prop-types */

const BestSellProdut = ({ data }) => {
  const { img, title, description, price } = data;
  console.log(data);
  return (
    <div>
      <div className="shadow-md h-full rounded-md">
        <div className=" h-96">
          <img src={img} className="w-full h-full " />
        </div>

        <div className="p-5">
          <div className="flex justify-between text-2xl text-primary font-semibold ">
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <p className="text-xl text-gray-600 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellProdut;
