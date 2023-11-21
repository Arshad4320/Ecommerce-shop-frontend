import HomeSearch from "../components/HomeSearch";
import BestSellProducts from "../components/bestSellProducts/BestSellProducts";
import HomeBanner from "../components/homeBanner";

const Home = () => {
  return (
    <div>
      <HomeSearch />
      <HomeBanner />
      <BestSellProducts />
    </div>
  );
};

export default Home;
