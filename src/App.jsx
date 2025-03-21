import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar";
import AboutProduct from "./pages/home/sections/AboutProduct";
import Footer from "./components/Footer";
import AboutInnovator from "./pages/home/sections/AboutInnovator";
import Showcase from "./pages/home/sections/Showcase";
import Contact from "./pages/home/sections/Contact";
import Error from "./components/Error";
import ProductCatalog from "./pages/home/sections/ProductCatalog";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutProduct />} />
        <Route path="/about-innovator" element={<AboutInnovator />} />
        <Route path="/products" element={<Showcase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
