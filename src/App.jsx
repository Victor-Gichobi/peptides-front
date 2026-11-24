import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>

  );

}

export default App;