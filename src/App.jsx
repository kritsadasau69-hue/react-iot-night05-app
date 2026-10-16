import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Smartphone from "./Pages/Smartphone"
import Tablet from "./Pages/Tablet"

export default function App() {
  return (
    // <> </> อันนี้เขาเรียก React.Fragment
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/wowwowwow" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/product" element={ <Product /> } />
          <Route path="/product/smartphone" element={ <Smartphone /> } />
          <Route path="/product/tablet" element={ < Tablet /> } />    
        </Routes>
      </BrowserRouter>
    </>
  )
}