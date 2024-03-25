import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/navbar'
import Footer from './components/Common/footer';
import Home from './Pages/Home/home';
import Shop from './Pages/Shop/shop';
import About from './Pages/about/about';
import Category from './Pages/Category/category';
import BikeProduct from './Pages/OnClickPages/product_details';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/category' element={<Category />} />
          <Route exact path='/product_list/1' element={<BikeProduct />} />
          {/* <Route exact path='/shoppingCart' element={<CartPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
