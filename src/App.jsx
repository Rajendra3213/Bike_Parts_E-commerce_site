// import React from 'react';
import './index.css'
import Carousel from './Pages/Home/carousal'; // Import the Carousel component from its file
import Navbar from './components/Common/navbar'; // Import the Navbar component from its file
import Footer from './components/Common/footer';

import CompanyOverview from './components/Common/client_satisfaction';
import Testimonial from './components/Common/testimonials';
import ServicePricing from './components/Common/service';
import BestSellingList from './components/Common/Best_selling';
import TrendingProduct from './components/Common/TrendingProduct'



function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <BestSellingList />
      <TrendingProduct />
      <CompanyOverview />
      <ServicePricing />
      <Testimonial />

      <Footer />




      {/* <Footer1 />
      <Footer2 /> */}


    </>
  );
}

export default App;
