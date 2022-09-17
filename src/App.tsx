import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";
import React from "react";

function App() {
  return (
    <div className="bg-blue lg:py-2">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
