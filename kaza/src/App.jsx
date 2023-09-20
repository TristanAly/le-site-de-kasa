import { useState } from "react";
import { NavBar } from "./components/Navbar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Location } from "./pages/location/Location";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
// import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
