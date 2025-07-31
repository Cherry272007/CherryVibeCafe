import Header from "./components/Header";
import "./App.css";
import { ProductProvider } from "./Context/ProductContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import About from "./components/About";
import Location from "./components/Location";
import Footer from "./components/Footer";
import { CartProvider } from "./Context/CartContext";
import { useRef } from "react";

const App = () => {
  const productRef = useRef(null);

  const scrollToMenu = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="background">
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header onMenuClick={scrollToMenu} />
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <Menu ref={productRef} />
                </>
              } />
              <Route path="/Menu" element={<Menu/>} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
              <Route path="/Location" element={<Location />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </div>
  );
};

export default App;
