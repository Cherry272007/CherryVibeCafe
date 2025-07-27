import Header from "./components/Header"
import "./App.css"
import { ProductProvider } from "./Context/ProductContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import About from "./components/About"
import Location from "./components/Location"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <div className="background">
      <ProductProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/Menu" element={<Menu/>} ></Route>
            <Route path="/Contact" element={<Contact/>} ></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Location" element={<Location/>} ></Route>
          </Routes>
          <Footer/>
          
        </BrowserRouter>
      </ProductProvider>
    </div>
    </>
  )
}

export default App
