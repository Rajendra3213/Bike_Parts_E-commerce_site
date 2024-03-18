import '/Users/rajendraacharya/Desktop/E_commerce/Bike_Parts_E-commerce_site/src/index.css'
import Carousel from '../components/Common/carousal'; // Import the Carousel component from its file
// import Navbar from '../components/Common/navbar'; // Import the Navbar component from its file
import Footer from '../components/Common/footer';

import CompanyOverview from '../components/Common/client_satisfaction';
import Testimonial from '../components/Common/testimonials';
import ServicePricing from '../components/Common/service';
import BestSellingList from '../components/Common/Best_selling';
import TrendingProduct from '../components/Common/TrendingProduct'

function Home() {
  return (
    <>
      <Carousel />
      <BestSellingList />
      <TrendingProduct />
      <CompanyOverview />
      <ServicePricing />
      <Testimonial />
      <Footer />
    </>
  );
}
export default Home;

