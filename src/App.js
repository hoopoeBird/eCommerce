import "./App.css";
import NavBar from "./components/nav";
import Landing from "./components/landing";
import ProductsList from "./components/productsList";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import ProductDetails from "./components/productDetails";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <ProductsList />
            </>
          }
        />
        <Route />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
