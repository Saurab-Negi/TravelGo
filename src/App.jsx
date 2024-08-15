import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import PlaceDetails from "./pages/PlaceDetails";
import Cart from "./components/Cart/Cart";
import Order from "./pages/Order/Order";
import Payment from "./pages/Payment";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="best-places/:id" element={<PlaceDetails />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="payment" element={<Payment />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;