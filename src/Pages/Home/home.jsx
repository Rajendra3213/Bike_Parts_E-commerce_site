import Carousel from "./carousal";
import BestSellingList from "./Best_selling";
import TrendingProduct from "./TrendingProduct";
import CompanyOverview from "./client_satisfaction";
import Testimonial from "./testimonials";
function Home() {
  return (
    <div>
      <Carousel />
      <BestSellingList/>
      <TrendingProduct/>
      <CompanyOverview/>
      <Testimonial/>
      </div>

  );
}

export default Home;
