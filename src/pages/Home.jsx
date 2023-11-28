import HomeBanner from "../components/HomeBanner";
import HomeSearch from "../components/HomeSearch";
import BestSellProducts from "../components/bestSellProducts/BestSellProducts";

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
