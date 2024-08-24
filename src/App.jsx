import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Loader from "./components/Loader/Loader"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import OrderPopup from "./components/OrderPopup/OrderPopup";

const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/Blogs"));
const NoPage = lazy(() => import("./pages/NoPage"));
const PlacesRoute = lazy(() => import("./pages/PlacesRoute"));
const About = lazy(() => import("./pages/About"));
const BlogsDetails = lazy(() => import("./pages/BlogsDetails"));
const PlaceDetails = lazy(() => import("./pages/PlaceDetails"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Order = lazy(() => import("./pages/Order/Order"));
const Payment = lazy(() => import("./pages/Payment"));
const Successful = lazy(() => import("./pages/Successful"));

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar handleOrderPopup={handleOrderPopup} />
        <Suspense fallback={<Loader />}>
          <Routes>

            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="best-places/:id" element={<PlaceDetails />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="payment" element={<Payment />} />
            <Route path="success" element={<Successful />} />
            <Route path="*" element={<NoPage />} />

          </Routes>
        </Suspense>
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </BrowserRouter>
  );
};

export default App;