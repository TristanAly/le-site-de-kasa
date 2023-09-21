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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/location/:id" element={<Location />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
