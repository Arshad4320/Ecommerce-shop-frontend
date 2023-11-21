import banner from "../assets/banner.jpg";


const HomeBanner = () => {
  return (
    <div className="mx-10">
      <div
        className="relative flex justify-center items-center text-white text-center  "
        style={{
          width: "full",
          height: "400px",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-primary opacity-70 py-30"></div>
        <div className="relative  ">
          <h1 className="text-5xl font-bold mb-4">Book Shop</h1>
          <p className="text-lg">Search your Favorite book</p>
          <div className="">
            <input type="text" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
